import {RotatingLines} from "react-loader-spinner";
import style from "../../assets/css/tableCoin.module.css";


import chartDown from "../../assets/images/chart-down.svg";
import chartUp from "../../assets/images/chart-up.svg";


export default function TableCoins({ data, error, loading }) {
  console.log(data[0]);

  return (
    <div className={style.container}>
      {!error && loading ? (
        <RotatingLines color="#f6f3f4" strokeWidth="2" />
      ) : (
        <table className={style.table}>
          <thead>
            <tr>
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
              data.map((coin) => <TableRow coin={coin} key={coin.id} />)
            ) : (
              <tr>
                <td colSpan="6" className="text-center text-white text-xl">Server Behemoon Error Dad</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

const TableRow = ({ coin }) => {
  return (
    <tr key={coin.id}>
      <td>
        <div className={style.symbol}>
          <img src={coin.image} alt="" />
          <span>{coin.symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{coin.name}</td>
      <td>$ {coin.current_price.toLocaleString()}</td>
      <td
        className={
          coin.price_change_percentage_24h > 0
            ? style.success
            : style.error
        }
      >
        {coin.price_change_percentage_24h.toFixed(2)} %{" "}
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
