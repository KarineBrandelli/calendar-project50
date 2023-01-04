import iconCloseWindow from '../../assets/icon_close_window.svg';
import './Button.css';

export const Button = () => {
  return (
    <button onClick={() => window.close()} className="close_button">
      <img src={iconCloseWindow} />
    </button>
  )
}