import { useState } from "react";
import style from "../../assets/css/chart.module.css";
import { convertData } from "../../helpers/convertData";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function Chart({ chart, setChart }) {
  const [type, setType] = useState("prices");

  const coin = chart?.coin;
  const search = chart?.search ?? false;
  console.log(coin.image);
  const closeHandler = () => {
    setChart(null);
  };

  const typeHandler = (value) => {
    setType(value);
  };
  return (
    <div className={style.container}>
      <span className={style.cross} onClick={closeHandler}>
        ×
      </span>

      <div className={style.chart}>
        <div className={style.name}>
          <img src={search
                ? coin.image.large : coin.image} alt="" />
          <p>{coin.name}</p>
        </div>
        <div className={style.graph}>
          <ChartComponent data={convertData(chart, type)} type={type} />
        </div>
        <div className={style.types}>
          <button
            className={type == "prices" ? style.selected : ""}
            onClick={() => typeHandler("prices")}
          >
            Prices
          </button>
          <button
            className={type == "market_caps" ? style.selected : ""}
            onClick={() => typeHandler("market_caps")}
          >
            Market Caps
          </button>
          <button
            className={type == "total_volumes" ? style.selected : ""}
            onClick={() => typeHandler("total_volumes")}
          >
            Total Volumes
          </button>
        </div>

        <div className={style.details}>
          <div>
            <p>Prices : </p>
            <span>${search
                ? coin.market_data.current_price.usd > 1 ? coin.market_data.current_price.usd.toLocaleString() : coin.market_data.current_price.usd
                : coin.current_price > 1 ? coin.current_price.toLocaleString() : coin.current_price}</span>
          </div>
          <div>
            <p>ATH : </p>
            <span>
              $
              {search
                ? coin.market_data.ath.usd.toLocaleString()
                : coin.ath.toLocaleString()}
            </span>
          </div>
          <div>
            <p>Market Cap : </p>
            <span>
              $
              {search
                ? coin.market_data.market_cap.usd.toLocaleString()
                : coin.market_cap.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const ChartComponent = ({ data, type }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={400} height={400} data={data}>
        <CartesianGrid stroke="#404042" />
        <Line
          type="monotone"
          dataKey={type}
          stroke="#3874ff"
          strokeWidth="2px"
        />
        <YAxis dataKey={type} domain={["auto", "auto"]} />
        <XAxis dataKey="date" hide />
        <Legend />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};
