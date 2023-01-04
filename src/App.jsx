import Button from "./components/Button";
import Header from "./components/Header";
import Home from './pages/Home';
import './App.css'

function App() {
  return (
    <div className="App">
      <Button />
      <div className="main-content">
        <Header />
        <Home />
      </div>
    </div>
  )
}

export default App;
