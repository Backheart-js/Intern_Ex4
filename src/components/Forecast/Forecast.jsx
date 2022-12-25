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
            <div className="flex items-center ml-5">
              <img src={data.condition?.icon} alt="" className="w-[140px] h-[140px]" />
              <span className={clsx(styles.degree, 'text-gray-800')}>
                {data.temp_c} 
                <span className="text-xl pt-2">
                  &#x2103;
                </span>
              </span>
            </div>
            <p className={clsx(styles.forecastConditionText, 'select-none text-center text-gray-800')}>
                {data.condition?.text}
            </p>
        </div>
        <div className={clsx(styles.forecastParameter, "flex justify-around px-10 pt-4")}>
          <div className={styles.humidityWrapper}>
            <p className={styles.forecastTitle}>
              Humidity
            </p>
            <p className={styles.paramText}>
              {data.humidity}%
            </p>
          </div>
          <div className={styles.windWrapper}>
            <p className={styles.forecastTitle}>
              Wind speed
            </p>
            <p className={styles.paramText}>
              {data.wind_kph} km/h
            </p>
          </div>
        </div>
    </div>
  )
}

export default Forecast