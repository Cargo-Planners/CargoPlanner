import React from "react";
import { Link } from "react-router-dom";
import { routeConstants } from "../Routes/constants";
import appIcon from "../images/appIcon.png";
import airPlane1 from "../images/airPlane1.png";
import airPlane2 from "../images/airPlane2.png";
import p1 from "../images/p1.png";
import p2 from "../images/p2.png";
import p3 from "../images/p3.png";
import p4 from "../images/p4.png";
import p5 from "../images/p5.png";
import p6 from "../images/p6.png";
import p7 from "../images/p7.png";
import p8 from "../images/p8.png";

const FirstPage = () => {
  return (
    <Link to={routeConstants.mainRoute}>
      <div id="background-color">
        <div id="background-image">
          <img src={airPlane1} alt="" id="airPlane1" />
          <img src={airPlane2} alt="" id="airPlane2" />
          <img src={p1} alt="" id="p1" />
          <img src={p2} alt="" id="p2" />
          <img src={p3} alt="" id="p3" />
          <img src={p4} alt="" id="p4" />
          <img src={p5} alt="" id="p5" />
          <img src={p6} alt="" id="p6" />
          <img src={p7} alt="" id="p7" />
          <img src={p8} alt="" id="p8" />
          <img src={appIcon} alt="" id="proj-img" />
          <h1 className="proj-label">GULLIVER</h1>
          <h1 className="proj-label">System Engineering</h1>
        </div>
      </div>
    </Link>
  );
};

export default FirstPage;
