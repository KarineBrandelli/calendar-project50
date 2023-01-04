import './Header.css';

export const Header = () => {
  const getTodayDate = new Date().toDateString();

  return (
    <header className="header grid">
      <h1 className="title flex">PROJECT50 <span className="current-date">{getTodayDate}</span></h1>
      <h2 className="subtitle">A CHALLENGE CREATED BY STATE OF MIND.</h2>
    </header>
  )
}