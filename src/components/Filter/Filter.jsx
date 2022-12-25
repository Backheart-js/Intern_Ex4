import React, { useState, useEffect } from 'react'

import { useDebounce } from '../../hooks'
import styles from './Filter.module.scss'
import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import { filterSelector } from '../../redux/selector'
import { filterSlice } from '../../redux/slice/filterSlice'

function Filter() {
    const filter = useSelector(filterSelector);
    const dispatch = useDispatch();
    const [citySearch, setCitySearch] = useState(filter.city)
    const debounce = useDebounce(citySearch, 700)

    const handleSearchChange = (e) => {
        setCitySearch(e.target.value)
    }
    const handleNumOfDaysChange = (e) => {
        dispatch(filterSlice.actions.numOfDaysChange(e.target.value));
    }

    useEffect(() => {
        if (debounce.trim().length > 0) {
            dispatch(filterSlice.actions.cityChange(debounce))
        }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounce])
    

  return (
    <div id="filter" className='w-[300px]'>
        <div className={clsx(styles.cityWrapper, 'flex mb-3')}>
            <span className={clsx(styles.filterTitle, '')}>Your city: </span>
            <input type="text" className={styles.filterInput} value={citySearch} onChange={handleSearchChange}/>
        </div>
        <div className={clsx(styles.daysWrapper, 'flex')}>
            <span className={clsx(styles.filterTitle)}>
                Number of days: 
            </span>
            <select className={styles.filterSelect} onChange={handleNumOfDaysChange}>
                <option value="3">3 days</option>
                <option value="3">7 days</option>
                <option value="3">14 days</option>
            </select>
        </div>
    </div>
  )
}

export default Filter