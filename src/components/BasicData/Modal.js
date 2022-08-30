import React from "react";
import Slider from "./Slider";
function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="overlay">
      <div className="modalContainer">
        <button onClick={onClose}>Close Modal</button>
        <label id="label">פודי דלק</label>
        <Slider label="External" />
        <Slider label="Auxiliary" />
        <Slider label="Inboard" />
        <Slider label="Outboard" />
      </div>
    </div>
  );
}

export default Modal;
