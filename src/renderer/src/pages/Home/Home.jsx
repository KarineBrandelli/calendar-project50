import { Header } from '../../components/Header/Header'
import { Calendar } from '../../components/Calendar/Calendar'
import { Footer } from '../../components/Footer/Footer'

import './Home.css'

export const Home = () => {
  return (
    <div className="home-container grid">
      <Header />
      <Calendar />
      <Footer />
    </div>
  )
}
