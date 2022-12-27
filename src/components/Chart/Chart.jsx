import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AreaChart, XAxis, YAxis, Tooltip, Area } from "recharts";
import { dataSelector } from "../../redux/selector";

function Chart({ isDetails = false, typeDataPassProp = "temperature" }) {
  const { current, forecast } = useSelector(dataSelector);
  const [data, setData] = useState([]);
  const type = {
    temperature: "temp_c",
    humidity: "humidity",
    uv: "uv",
  };

  useEffect(() => {
    if (forecast.forecastday !== undefined) {
      const currentHour = Number(
        current.last_updated.split(" ")[1].split(":")[0]
      );
      const today = forecast.forecastday[0].hour;
      const nextDay = forecast.forecastday[1].hour;
      let time;
      let dataType;
      let typeDisplay = type[typeDataPassProp];
      let newArr = [];

      if (isDetails) {
        //Render các chỉ số chi tiết trong 1 ngày
        today.forEach((hour, index) => {
          if (index % 2 === 0) {
            time = index !== currentHour ? hour.time.split(" ")[1] : "now";
            newArr.push({
              time,
              [typeDataPassProp]: today[index][typeDisplay],
            });
          }
        });
      } else {
        //Render trong thời gian gần nhất
        const rangeOfChart = [currentHour - 2, currentHour + 6];
        for (let i = rangeOfChart[0]; i < rangeOfChart[1]; i++) {
          time = i !== currentHour ? today[i].time.split(" ")[1] : "now";
          dataType = today[i][typeDisplay];
          if (i >= 24) {
            time = nextDay[i % 24].time.split(" ")[1];
            dataType = nextDay[i % 24][typeDisplay];
          }
          newArr.push({
            time,
            [typeDataPassProp]: dataType,
          });
        }
      }

      setData(newArr);
    }
  }, [forecast, typeDataPassProp]);

  return (
    <AreaChart
      width={isDetails ? 1080 : 730}
      height={isDetails ? 300 : 250}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      {/* <Line type="monotone" dataKey="temp" stroke="#8884d8" /> */}
      <defs>
        <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
          <stop
            offset="5%"
            stopColor={`${
              typeDataPassProp === "humidity" ? "#0096c7" : "#ff9500"
            }`}
            stopOpacity={0.8}
          />
          <stop
            offset="95%"
            stopColor={`${
              typeDataPassProp === "humidity" ? "#90e0ef" : "#ffea00"
            }`}
            stopOpacity={0}
          />
        </linearGradient>
      </defs>
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey={`${typeDataPassProp}`}
        stroke={`${typeDataPassProp === "humidity" ? "#023e8a" : "#ff8800"}`}
        fillOpacity={1}
        fill="url(#colorTemp)"
      />
    </AreaChart>
  );
}

export default Chart;
