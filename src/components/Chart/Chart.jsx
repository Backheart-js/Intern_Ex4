import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { dataSelector } from "../../redux/selector";

function Chart() {
  const { current, forecast } = useSelector(dataSelector);
  const [data, setData] = useState([])
  
  useEffect(() => {
    const eachDay = forecast.forecastday !== undefined ? forecast.forecastday[0].hour : [];
    let newArr = [];
    eachDay.forEach((hour, i) => {
      if (i % 2 === 0) {
        newArr.push({
          time: hour.time.split(" ")[1],
          temp: hour.temp_c
        })
      }
    })
    setData(newArr);  
     
  }, [forecast])

  return (
    <>
      <div className='mb-4 ml-4'>
        <p className="text-gray-600 text-xl select-none">
          Temperature chart
        </p>
      </div>
      <LineChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="temp" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </>
  );
}

export default Chart;
