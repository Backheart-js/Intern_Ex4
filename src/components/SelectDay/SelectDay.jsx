import React from 'react'
import { useSelector } from 'react-redux'
import { dataSelector } from '../../redux/selector';

function SelectDay() {
    const { location, current, forecast } = useSelector(dataSelector);
    return (
        <div className='flex'>
            {forecast.forecastday?.map((forecastDay, index) => (
                <ForecastCard data={forecastDay} index={index} key={index} />
            )
            )}
        </div>
  )
}

function ForecastCard({ data, ...props }) {

    return (
        <div className="" {...props}>
            <div className="">
                <p className="">
                    {props.index === 0 ? "Today" : data.date}
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