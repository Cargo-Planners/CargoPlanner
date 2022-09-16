import React from "react";
import { Link } from "react-router-dom";
import { routeConstants } from "../Routes/constants";

const FirstPage = () => {
    return (
        <Link to={routeConstants.mainRoute}>
            <div id="background-image">

            </div>
        </Link>
    );
};

export default FirstPage;
