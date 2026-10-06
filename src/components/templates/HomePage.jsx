import { useEffect, useState } from "react";
import TableCoins from "../module/TableCoins";
import { getData } from "../../services/getApi";
import Pagination from "../module/Pagination";
import Search from "../module/Search";

export default function HomePage() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState('usd');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await getData(
        `coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&`,
        page,
      );
      setData(result.data);
      setError(result.error);

      setLoading(false);
    };
    fetchData();
  }, [page, currency]);

  const prevHandler = () => {
    if (page > 1) {
      setPage((page) => page - 1);
    }
  };

  const nextHandler = () => {
    if (page < 10) {
      setPage((page) => page + 1);
    }
  };
  return (
    <>
      <Search currency={currency} setCurrency={setCurrency} />
      <TableCoins data={data} error={error} loading={loading} currency={currency} />
      <Pagination
        prevHandler={prevHandler}
        nextHandler={nextHandler}
        page={page}
      />
    </>
  );
}
