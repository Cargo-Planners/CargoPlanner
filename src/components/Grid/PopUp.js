import React, { Fragment, useRef, useEffect } from "react";

const PopUp = ({ content, handleClose }) => {
  const boxRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      console.log(boxRef.current, event.target);
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [boxRef, handleClose]);

  return (
    <Fragment>
      <div className="popup-box">
        <div className="box" ref={boxRef}>
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
