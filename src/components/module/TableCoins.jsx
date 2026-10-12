import { RotatingLines } from "react-loader-spinner";
import style from "../../assets/css/tableCoin.module.css";

import chartDown from "../../assets/images/chart-down.svg";
import chartUp from "../../assets/images/chart-up.svg";
import { getData } from "../../services/getApi";

export default function TableCoins({
  data,
  error,
  loading,
  currency,
  setChart,
}) {
  return (
    <div className={style.container}>
      {!error && loading ? (
        <RotatingLines color="#f6f3f4" strokeWidth="2" />
      ) : (
        <TableStructure
          data={data}
          error={error}
          currency={currency}
          setChart={setChart}
        />
      )}
    </div>
  );
}

const TableStructure = ({ data, error, currency, setChart }) => {
  return (
    <table className={style.table}>
      <thead>
        <tr>
          <th>#</th>
          <th>Coin</th>
          <th>Name</th>
          <th>Price</th>
          <th>24h</th>
          <th>Total Volume</th>
          <th>24h Price%</th>
        </tr>
      </thead>
      <tbody>
        {!error && data.length > 0 ? (
          data.map((coin, i) => (
            <TableRow
              coin={coin}
              key={coin.id}
              counter={i + 1}
              currency={currency}
              setChart={setChart}
            />
          ))
        ) : (
          <tr>
            <td colSpan="6" className="text-center text-white text-xl">
              Server Behemoon Error Dad
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

const TableRow = ({ coin, counter, currency, setChart }) => {
  const showHandler = async () => {
    const result = await getData(
      `coins/${coin.id}/market_chart?vs_currency=usd&days=1`,
    );
    setChart(result.data);
  };
  return (
    <tr key={coin.id}>
      <td>{counter}</td>
      <td>
        <div className={style.symbol} onClick={showHandler}>
          <img src={coin.image} alt="" />
          <span>{coin.symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{coin.name}</td>
      <td>
        <span>{currency == "usd" ? "$" : currency == "eur" ? "€" : "¥"}</span>{" "}
        {coin.current_price.toLocaleString()}
      </td>
      <td
        className={
          coin.price_change_percentage_24h > 0 ? style.success : style.error
        }
      >
        {coin.price_change_percentage_24h
          ? coin.price_change_percentage_24h.toFixed(2)
          : 0}{" "}
        %{" "}
      </td>
      <td>{coin.total_volume.toLocaleString()}</td>
      <td>
        <img
          src={coin.price_change_percentage_24h > 0 ? chartUp : chartDown}
          alt=""
        />
      </td>
    </tr>
  );
};
