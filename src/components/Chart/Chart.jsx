
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import styles from './Chart.module.scss';

function Chart() {
  const data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 210, pv: 1000, amt: 2000 },
    { name: "Page C", uv: 300, pv: 1400, amt: 2100 },
    { name: "Page D", uv: 100, pv: 2400, amt: 2400 },
    { name: "Page E", uv: 350, pv: 2400, amt: 2400 },
  ];
  
  return (
    <>
      <div className={styles.chartTitle}>
        <p className="">
          Temperature chart
        </p>
      </div>
      <LineChart
        width={800}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="amt" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </>
  );
}

export default Chart;
