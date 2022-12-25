import clsx from 'clsx';
import React from 'react'
import { useSelector } from 'react-redux';
import { currentforecastSelector } from '../../redux/selector';
import styles from './Forecast.module.scss';

function Forecast() {
    const data = useSelector(currentforecastSelector);
    
  return (
    <div className=''>
        <div className={styles.forecastCondition}>
            <div className="flex">
              <img src={data.condition?.icon} alt="" className="" />
              <span className={styles.degree}>
                {data.temp_c}&#x2103;
              </span>
            </div>
            <p className={clsx(styles.forecastConditionText, 'select-none')}>
                {data.condition?.text}
            </p>
        </div>
        <div className={clsx(styles.forecastParameter, "flex")}>
          <div className={styles.humidityWrapper}>
            <p className={styles.forecastTitle}>
              Humidity
            </p>
            <p className="">
              {data.humidity} %
            </p>
          </div>
          <div className={styles.windWrapper}>
            <p className={styles.forecastTitle}>
              Wind speed
            </p>
            <p className="">
              {data.wind_kph} km/h
            </p>
          </div>
        </div>
    </div>
  )
}

export default Forecast