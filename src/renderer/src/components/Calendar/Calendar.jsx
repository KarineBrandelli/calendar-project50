import { CheckCircle } from 'phosphor-react'
import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import './Calendar.css'

export const Calendar = () => {
  const calendar = new Array(50).fill(false)
  const [days, setDays] = useState([...calendar])

  useEffect(() => {
    async function getDataFromDB() {
      const res = await fetch('https://calendar-project50-api.wesleydamasceno.repl.co/all')
      const data = await res.json()

      const database = []
      for (const day in data) {
        database.push(data[day].tasks)
      }

      setDays(database)
    }

    getDataFromDB()
  }, [])

  return (
    <main className="calendar-days">
      <ul className="days">
        {days.map((day, index) => {
          return (
            <li key={index}>
              <Link to={`day/${index + 1}`}>
                {updateStateDay()[index] ? <CheckCircle size={32} color="white" /> : index + 1}
              </Link>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
