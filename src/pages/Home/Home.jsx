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
import { filterSelector } from '../../redux/selector';
import filterSlice from '../../redux/slice/filterSlice';

function Home() {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const filter = useSelector(filterSelector);

  useEffect(() => {
    console.log(filter);
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
    <div className='flex'>
      <div className={clsx(styles.sidebarWrapper)}>
        <Filter />
        <Clock />
        <Forecast /> 
      </div>
      <div className={styles.maincontentWrapper}>
        <Chart />
        <SelectDay />
      </div>
    </div>
  )
}

export default Home