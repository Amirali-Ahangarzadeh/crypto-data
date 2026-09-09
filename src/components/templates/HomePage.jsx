import { useEffect, useState } from "react";
import TableCoins from "../module/TableCoins";
import { getData } from "../../services/getApi";

export default function HomePage() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData(
        "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&",
      );
      setData(result.data);
      setError(result.error);

      setLoading(false);
    };
    fetchData();
  }, [data]);

  console.log(data);
  return (
    <>
      <TableCoins data={data} error={error} loading={loading} />
    </>
  );
}
