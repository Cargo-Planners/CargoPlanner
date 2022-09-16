import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { routeConstants } from "../../Routes/constants";

const OptionWrapper = ({ name, img }) => {
  return (
    <Fragment>
      <Link to={routeConstants.homeRoute}>
        <div className="grid justify-around rounded-2xl bg-[#6C614B] p-2 cursor-pointer" >
          <img className="rounded-2xl h-40" src={img} alt="img" />
          <h1 className="justify-self-center font-bold">{name}</h1>
        </div>
      </Link>
    </Fragment>
  );
};

export default OptionWrapper;
