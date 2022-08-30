import React from "react";

const TextBox = ({ label, placeholder }) => {
  return (
    <div>
      <div id="text-box-item">
        <label className="text-lg">{label}</label>
        <input id="input-css" placeholder={placeholder} type="text" />
      </div>
    </div>
  );
};

export default TextBox;
