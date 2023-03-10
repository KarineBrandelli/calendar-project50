import { Header } from '../../components/Header/Header'
import { Calendar } from '../../components/Calendar/Calendar'

import './Home.css'

export const Home = () => {
  return (
    <div className="home-container grid">
      <Header />
      <Calendar />
    </div>
  )
}
