import styles from './Modal.module.scss'
import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx';

function Modal({ dataPerHour, onClose }) {
    const modalRef = useRef(null);
    const [dataOfModal, setdataOfModal] = useState(dataPerHour)

    useEffect(() => {
        modalRef.current.addEventListener('click',(e) => {
            e.stopPropagation()
        });

    }, [])
    console.log(dataOfModal);
  return (
    <div className={styles.overlay} onClick={onClose}>
        <div ref={modalRef} className={styles.modalBox}>
            <div className={styles.modalHeaderWrapper}>
                <div className="flex justify-center items-center">
                    <span className="text-4xl text-gray-700 select-none">Infomation</span>
                </div>
                <button className={styles.closemodalBtn} onClick={onClose}>
                    <FontAwesomeIcon className='text-xl' icon={faXmark} />
                </button>
            </div>
            <div className={styles.modalBodyWrapper}>
                <div className={styles.condition}>
                    <img src={dataOfModal.condition.icon} className={styles.iconImg} alt="" />
                    <p className="ml-2 text-3xl text-gray-700 select-none">{dataOfModal.condition.text}</p>
                </div>
                <hr className='text-gray-800' />
                <div className={clsx(styles.parameterList, 'grid md:grid-cols-3 sm:grid-cols-2 md:gap-4 sm:gap-2')}>
                        <div className={styles.paramsItem}>
                            <div className="">
                                <img className={styles.paramIcon} src="https://www.svgrepo.com/show/43232/temperature.svg" alt="" />
                            </div>
                            <div className={styles.paramText}>
                                <span className='text-sm text-gray-700 select-none'>
                                    Temperature: 
                                </span>
                                <span className='text-xl'>
                                    {`${dataOfModal.temp_c}`}&#x2103;
                                </span>
                            </div>
                        </div>
                        <div className={styles.paramsItem}>
                            <div className=''>
                                <img className={styles.paramIcon} src="https://www.svgrepo.com/show/80461/wind.svg" alt="" />
                            </div>
                            <div className={styles.paramText}>
                                <span className='text-sm text-gray-700 select-none'>
                                    Wind:
                                </span>
                                <span className='text-xl'>
                                    {`${dataOfModal.wind_dir} ${dataOfModal.wind_kph} km/h`}
                                </span>
                            </div>
                        </div>
                        <div className={styles.paramsItem}>
                            <div className=''>
                                <img className={styles.paramIcon} src="https://www.svgrepo.com/show/80461/wind.svg" alt="" />
                            </div>
                            <div className={styles.paramText}>
                                <span className='text-sm text-gray-700 select-none'>
                                    Wind direction:
                                </span>
                                <span className='text-xl'>
                                    {`${dataOfModal.wind_dir}`}
                                </span>
                            </div>
                        </div>
                        <div className={styles.paramsItem}>
                            <div className="">
                                <img className={styles.paramIcon} src="https://cdn-icons-png.flaticon.com/512/219/219816.png" alt="" />
                            </div>

                            <div className={styles.paramText}>
                                <span className='text-sm text-gray-700 select-none'>
                                    Humidity:
                                </span>
                                <span className='text-xl'>
                                    {`${dataOfModal.humidity}%`}
                                </span>
                            </div>
                        </div>
                        <div className={styles.paramsItem}>
                            <div className="">
                                <img className={styles.paramIcon} src="https://www.svgrepo.com/show/77534/rainy-day.svg" alt="" />
                            </div>

                            <div className={styles.paramText}>
                                <span className='text-sm text-gray-700 select-none'>
                                    Chance of rain:
                                </span>
                                <span className='text-xl'>
                                    {`${dataOfModal.chance_of_rain}%`}
                                </span>
                            </div>
                        </div>
                        <div className={styles.paramsItem}>
                            <div className="">
                                <img className={styles.paramIcon} src="https://www.svgrepo.com/download/17316/snowflake.svg" alt="" />
                            </div>
                            <div className={styles.paramText}>
                                <span className='text-sm text-gray-700 select-none'>
                                    Chance of snow:
                                </span>
                                <span className='text-xl'>
                                    {`${dataOfModal.chance_of_snow}%`}
                                </span>
                            </div>
                        </div>
                        <div className={styles.paramsItem}>
                            <div className="">
                                <img className={styles.paramIcon} src="https://www.svgrepo.com/show/262473/lights-sun.svg" alt="" />
                            </div>
                            <div className={styles.paramText}>
                                <span className='text-sm text-gray-700 select-none'>
                                    Feelslike:
                                </span>
                                <span className='text-xl'>
                                    {`${dataOfModal.feelslike_c}`}&#x2103;
                                </span>
                            </div>
                        </div>
                        <div className={styles.paramsItem}>
                            <div className="">
                                <img className={styles.paramIcon} src="https://www.svgrepo.com/show/64930/vision.svg" alt="" />
                            </div>
                            <div className={styles.paramText}>
                                <span className='text-sm text-gray-700 select-none'>
                                    Vision:
                                </span>
                                <span className='text-xl'>
                                    {`${dataOfModal.vis_km}km`}
                                </span>
                            </div>
                        </div>
                        <div className={styles.paramsItem}>
                            <div className="">
                                <img className={styles.paramIcon} src="https://www.svgrepo.com/show/145136/uv-ray-warning.svg" alt="" />
                            </div>
                            <div className={styles.paramText}>
                                <span className='text-sm text-gray-700 select-none'>
                                    UV:
                                </span>
                                <span className='text-xl'>
                                    {`${dataOfModal.uv}`}
                                </span>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal