import { Link } from "react-router-dom";

import { Header } from "../../components/Header/Header";
import { Checklist } from "../../components/Checklist/Checklist";
import { ArrowLeft } from "phosphor-react";

import "./Day.css";

export const Day = () => {
  return (
    <div className="day-container grid">
      <Link to={`/`}>
        <ArrowLeft 
          className="arrow-left" 
          size={24} 
          color="white" 
        />
      </Link>

      <Header />
      <Checklist />
    </div>
  )
}