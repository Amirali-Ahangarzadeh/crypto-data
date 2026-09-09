import { useEffect, useState } from "react";
import TableCoins from "../module/TableCoins";

export default function HomePage() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async (page = 1) => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=20&page=${page}`,
          {
            headers: {
              "x-cg-demo-api-key": "CG-xR4gwsvYPFNcVX2PbfCLEb74",
            },
          },
        );
        if (response.status != 200) {
          setError(true);
          setData([]);
        } else {
          const result = await response.json();
          setData(result);
          setError(false);
        }
      } catch (error) {
        console.log(error.name);
        setError(true);
      }
    };
    fetchData();
  }, []);

  console.log(data);
  return (
    <>
      <TableCoins data={data} error={error} />
    </>
  );
}
