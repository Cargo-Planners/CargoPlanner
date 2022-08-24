import React, { Fragment } from "react";

const PopUp = ({ content, handleClose }, fabricRef) => {
  
  return (
    <Fragment>
      <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={handleClose}>
            x
          </span>
          {content}
        </div>
      </div>
    </Fragment>
  );
};

export default PopUp;
