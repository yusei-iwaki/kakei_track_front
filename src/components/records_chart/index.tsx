import PieChart from "./chart";
import styles from "./index.module.scss";

const RecordChart = () => {
  const totalAmount: number = 200000;
  return (
    <div className={styles.chart_container}>
      <h2 className={styles.amount}>合計　￥{totalAmount}</h2>
      <div className={styles.chart_main}>
        <PieChart totalAmount={totalAmount} />
      </div>
    </div>
  );
};

export default RecordChart;
