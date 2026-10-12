
import style from "../../assets/css/chart.module.css";

export default function Chart({ chart, setChart }) {
 
  const closeHandler = () => {
    setChart(null);
  };
  return (
    <div className={style.container}>
      <span className={style.cross} onClick={closeHandler}>
        ×
      </span>

      <div className={style.chart}></div>
    </div>
  );
}
