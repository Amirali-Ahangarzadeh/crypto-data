import { useEffect, useState } from "react";
import { getData } from "../../services/getApi";
import style from "../../assets/css/search.module.css";

import { RotatingLines } from "react-loader-spinner";

export default function Search({ currency, setCurrency, setChart }) {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (text.length >= 3) {
      const fetchData = async () => {
        setLoading(true);
        const result = await getData(
          `search?query=${text.toLocaleLowerCase()}`,
        );
        setData(result.data?.coins);
        setLoading(false);
      };
      fetchData();
    }
  }, [text]);

  const textHandler = (e) => {
    setText(e.target.value);
    if (text.length < 3) {
      setData([]);
    }
  };

  const showHandler = async (id) => {
    const result = await getData(
      `coins/${id}/market_chart?vs_currency=usd&days=1`,
    );

    const coin = await getData(`coins/${id}`);
    setChart({ ...result.data, coin: coin.data, search: true });
    setText("");
    setData([]);
  };
  return (
    <div className={style.serachBox}>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="search"
        value={text}
        onChange={textHandler}
      />
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
      {text.length > 2 && (
        <div className={style.searchResult}>
          {loading ? (
            <div className="flex justify-center">
              <RotatingLines
                color="#f6f3f4"
                width="50px"
                height="50px"
                strokeWidth="2"
              />
            </div>
          ) : (
            <>
              {data.length > 0 && (
                <ul>
                  {data.map((searchData) => (
                    <li
                      key={searchData.id}
                      onClick={() => showHandler(searchData.id)}
                    >
                      <img src={searchData.thumb} alt="" />
                      <p>{searchData.name}</p>
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
