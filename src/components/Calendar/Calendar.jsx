import { CheckCircle } from "phosphor-react";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import "./Calendar.css";

{/* <CheckCircle size={32} color="white" /> */}

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

  return (
    <main className="calendar-days">
      <ul className="days">
        {
          days.map((day, index) => {
            return (
              <li key={index + 1}>
                <Link to={`day/${index + 1}`}>
                  {index + 1}
                </Link>
              </li>
            )
          })
        }
      </ul>
    </main>
  )
}