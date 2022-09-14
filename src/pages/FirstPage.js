import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { routeConstants } from "../Routes/constants";

//import firstPageImage from "../images/choosePlatform.png";

const FirstPage = () => {
    return (
        <Link to={routeConstants.mainRoute}>
            <div id="background-image">

            </div>
        </Link>
    );
};

export default FirstPage;
