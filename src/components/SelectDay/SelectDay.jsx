import clsx from 'clsx';
import React from 'react'
import { useSelector } from 'react-redux'
import { dataSelector } from '../../redux/selector';
import styles from './SelectDay.module.scss'

function SelectDay() {
    const { forecast } = useSelector(dataSelector);
    return (
        <div className='flex ml-[56px] mr-4 mt-4 overflow-y-auto'>
            {forecast.forecastday?.map((forecastDay, index) => (
                <ForecastCard data={forecastDay} index={index} key={index} />
            )
            )}
        </div>
  )
}

function ForecastCard({ data, ...props }) {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
    const dateArr = data.date.split('-');

    return (
        <div className={clsx(styles.selectDay, `basis-1/4 text-gray-800 ${props.index === 0 ? 'bg-[#669bbc] text-white' : ''}`)} {...props}>
            <div className="">
                <p className="">
                    {props.index === 0 ? "Today" : `${months[dateArr[1]-1].slice(0,3)} ${dateArr[2]}`}
                </p>
            </div>
            <div className="">
              <img src={data.day?.condition?.icon} alt="" className="" />
            </div>
            <div className="">
                <p className="">
                    Humidity
                </p>
            </div>
            <p className="">
                {data.day?.avghumidity} %
            </p>
        </div>
    )
}

export default SelectDay