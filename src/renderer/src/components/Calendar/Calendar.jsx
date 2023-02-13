import { CheckCircle } from 'phosphor-react'
import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import './Calendar.css'

export const Calendar = () => {
  const calendar = new Array(50).fill(false)
  const [days, setDays] = useState([...calendar])

  useEffect(() => {
    const storage = days.map((day, index) => {
      const currentDay = JSON.parse(localStorage.getItem(`day ${index + 1}`)) || false

      if (currentDay) {
        return currentDay.every((task) => task)
      }

      return currentDay
    })

    setDays(storage)
  }, [])

  return (
    <main className="calendar-days">
      <ul className="days">
        {days.map((day, index) => {
          return (
            <li key={`day-${index}`}>
              <Link to={`day/${index + 1}`}>
                {day ? <CheckCircle size={32} color="white" /> : index + 1}
              </Link>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
