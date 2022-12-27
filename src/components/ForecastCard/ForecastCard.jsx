import React, { memo } from "react";
import styles from "./ForecastCard.module.scss";

function ForecastCard({ data, onDbClick, ...props }) {
  return (
    <div className={styles.ForecastCardWrapper} {...props}>
      <div className={styles.ForecastCard} onDoubleClick={onDbClick}>
        <div className="">
          <p className="">{data.time.split(" ")[1]}</p>
        </div>
        <div className="flex justify-center">
          <img src={data.condition?.icon} alt="" className="" />
        </div>
        <p className="">Humidity</p>
        <p className="">{data.humidity}%</p>
      </div>
    </div>
  );
}

export default memo(ForecastCard);
