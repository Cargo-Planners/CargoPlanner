import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { routeConstants } from "../../Routes/constants";

const OptionWrapper = ({ name, img }) => {
  return (
    <Fragment>
      <Link to={routeConstants.BasicDataRoute}>
        <div className="flex justify-around rounded-2xl bg-white p-2 cursor-pointer">
          <h1 className="text-3xl m-auto font-semibold">{name}</h1>
          <img className="rounded-2xl 2xl:h-24 h-16" src={img} alt="img" />
        </div>
      </Link>
    </Fragment>
  );
};

export default OptionWrapper;
