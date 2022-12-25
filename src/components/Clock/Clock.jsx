import React, { useEffect, useState } from 'react'

function Clock() {
    const dayOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
    
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

    const [hour, setHour] = useState()
    const [date, setDate] = useState()
    
    useEffect(() => {
        function clock() {
            const d = new Date();
            const hour = `${d.getHours()<9 ? '0'+d.getHours() : d.getHours()}:${d.getMinutes()<9 ? '0'+d.getMinutes():d.getMinutes()}:${d.getSeconds() < 10 ? '0'+d.getSeconds() : d.getSeconds()}`
            const date = `${dayOfWeek[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
            setHour(hour);
            setDate(date);
        }
      const timer = setInterval(clock, 1000)
    
      return () => {
        clearInterval(timer);
      }
    }, [])
    

  return (
    <div>
        <span className="select-none">
            {hour}
        </span>
        <span className="select-none ml-2">
            {date}
        </span>
    </div>
  )
}

export default Clock