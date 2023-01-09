import { useParams } from "react-router-dom";
import './Header.css';

export const Header = () => {
  const { id } = useParams();
  const getTodayDate = new Date().toDateString();
  const getPageParams = `Day ${id}`;

  return (
    <header className="header grid">
      <h1 className="title flex">PROJECT50 <span className="current-date">{id ? getPageParams : getTodayDate}</span></h1>
      <h2 className="subtitle">A CHALLENGE CREATED BY STATE OF MIND.</h2>
    </header>
  )
}