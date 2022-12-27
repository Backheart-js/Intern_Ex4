import clsx from 'clsx';
import React, { useEffect, useState, useLayoutEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import Chart from '../../components/Chart/Chart';
import ForecastCard from '../../components/ForecastCard/ForecastCard';
import Loading from '../../components/Loading/Loading';
import Modal from '../../components/Modal/Modal';
import Slick from '../../components/Slick/Slick';
import { dataSlice } from '../../redux/slice/dataSlice';
import weatherAPI from '../../utils/weatherAPI';
import styles from './Details.module.scss';

function Details() {
  const { q, days, date_epoch } = useParams()
  const dispatch = useDispatch()
  const [dataType, setDataType] = useState('temperature')
  const [data, setData] = useState({})
  const [index, setIndex] = useState(0)
  const [dataIntoModal, setdataIntoModal] = useState({})
  const [isLoading, setisLoading] = useState(false)
  const [isOpenModal, setisOpenModal] = useState(false)

  const handleChangeDataType = (e) => {
    setDataType(e.target.value)
  }

  const openModal = () => {
    setisOpenModal(true);
  }
  const closeModal = useCallback(
    () => {
      setisOpenModal(false)
    },
    [isOpenModal],
  )
  const handleDBClicks = (hour) => {
    setdataIntoModal(data.forecast.forecastday[index].hour[hour])
    openModal();
  }

  useLayoutEffect(() => {
    const getData = async () => {
      const params = {
        q,
        days
      }
      try {
        setisLoading(true);
        const response = await weatherAPI.getForecast({params});
        setData(response) 
        dispatch(dataSlice.actions.dataChange(response));      
        setisLoading(false);

      } catch (error) {
        throw error;
      }
    }
  
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, days])
  
  useEffect(() => {
    if (data.forecast?.forecastday !== undefined) {
      function findIndexFunc(date) {
        return date.date_epoch === Number(date_epoch);
      }
      const index = data.forecast.forecastday.findIndex(findIndexFunc) 
      setIndex(index)
    }

  }, [data])
  console.log(data);
  return (
    <div className='relative'>
      <div className="mb-4">
        <p className="text-center text-4xl font-medium select-none">
          {`${data.location?.name} - ${data.location?.country}`}
        </p>
        <p className="text-center text-xl mt-2">
          {data.forecast?.forecastday[index].date}
        </p>
        <div className="flex justify-center mt-4">
          <div className={clsx(styles.astroWrapper, 'flex items-center')}>
            <img className='w-[60px] h-[60px]' src="https://www.svgrepo.com/show/276666/sunrise-morning.svg" alt="" />
            <span className='ml-2 text-lg text-gray-800'>
              Sunrise: {data.forecast?.forecastday[index].astro.sunrise}
            </span>
          </div>
          <div className={clsx(styles.astroWrapper, 'flex items-center')}>
            <img className='w-[60px] h-[60px]' src="https://www.svgrepo.com/show/276661/sunset.svg" alt="" />
            <span className='ml-2 text-lg text-gray-800'>
              Sunset: {data.forecast?.forecastday[index].astro.sunset}
            </span>
          </div>
        </div>
      </div>
      <hr />
      <div className="py-4 ml-14 mt-4">
        <button onClick={handleChangeDataType} value="temperature" className={styles.chartBtn}>Temperature</button>
        <button onClick={handleChangeDataType} value="humidity" className={styles.chartBtn}>Humidity</button>
        <button onClick={handleChangeDataType} value="uv" className={styles.chartBtn}>UV</button>
      </div>

      <div className="w-[1080px] mx-auto">
        <Chart isDetails={true} typeDataPassProp={dataType} />
        <div className='pl-14 pr-5 mt-8'>
          <Slick
            infinite={false}
            slidesToShow={8}
            slidesToScroll={8}
            arrows={false}
          >
            {
              data.forecast?.forecastday[index].hour.map((hour, i) => (
                <ForecastCard data={hour} onDbClick={() => handleDBClicks(i)} key={i} />
              ))
            }
          </Slick>
        </div>
      </div>
      
      {
        isLoading && <Loading />
      }
      {
        isOpenModal && <Modal dataPerHour={dataIntoModal} onClose={closeModal} />
      }
    </div>
  )
}

export default Details