import { X } from "phosphor-react";
import './Button.css';

export const Button = () => {
  return (
    <button onClick={() => window.close()} className="close_button">
      <X size={28} color="#8E2E2E"/>
    </button>
  )
}