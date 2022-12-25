import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { dataSlice } from '../../redux/slice/dataSlice';
import weatherAPI from '../../utils/weatherAPI';
import clsx from 'clsx';
import styles from './Home.module.scss'
import Filter from '../../components/Filter/Filter';
import Clock from '../../components/Clock/Clock';
import Forecast from '../../components/Forecast/Forecast';
import Chart from '../../components/Chart/Chart';
import SelectDay from '../../components/SelectDay/SelectDay';
import { dataSelector, filterSelector } from '../../redux/selector';
import filterSlice from '../../redux/slice/filterSlice';

function Home() {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const filter = useSelector(filterSelector);

  useEffect(() => {
    const getData = async () => {
      const params = {
        q: filter.city,
        days: filter.numberOfDays
      }
      try {
        const response = await weatherAPI.getForecast({params});
        setData(response)
        dispatch(dataSlice.actions.dataChange(response));      
      } catch (error) {
        throw error;
      }
    }
  
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter])
  
  return (
    <>
      <div className="mb-4">
        <p className="text-center text-5xl font-semibold text-gray-700 select-none">
          {data.location?.name}
        </p>
      </div>
      <div className="flex">
        <Filter />
      </div>
      <div className='flex justify-between items-end'>
        <div className={clsx(styles.sidebarWrapper)}>
          <div className="">
            <Clock />
            <Forecast /> 
          </div>
        </div>
        <div className={styles.maincontentWrapper}>
          <Chart />
          <SelectDay />
        </div>
      </div>
    </>
  )
}

export default Home