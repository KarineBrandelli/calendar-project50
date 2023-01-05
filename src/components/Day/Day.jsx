import { Header } from "../Header/Header";
import { Checklist } from "../Checklist/Checklist";
import { ArrowLeft } from "phosphor-react";

export const Day = () => {
  return (
    <div>
      <a href="">
        <ArrowLeft
          className="arrow-left"
          size={24} color="white" />
      </a>
      <Header />
      <Checklist />
    </div>
  )
}