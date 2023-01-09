import { CheckCircle } from "phosphor-react";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import "./Calendar.css";

export const Calendar = () => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    async function getDataFromDB() {
      const res = await fetch('./src/db.json')
      const data = await res.json();

      const database = [];
      for (const day in data) {
        database.push(data[day].tasks);
      }

      setDays(database);
    }

    getDataFromDB();
  }, [])

  function updateStateDay() {
    const stateDay = [];

    for (const day of days) {
      if (day.every(value => value)) stateDay.push(true);
      else stateDay.push(false);
    }

    return stateDay;
  }

  return (
    <main className="calendar-days">
      <ul className="days">
        {
          days.map((day, index) => {
            return (
              <li key={index}>
                <Link to={`day/${index + 1}`}>
                  {
                    updateStateDay()[index] 
                    ? <CheckCircle size={32} color="white" />
                    : index + 1
                  }
                </Link>
              </li>
            )
          })
        }
      </ul>
    </main>
  )
}