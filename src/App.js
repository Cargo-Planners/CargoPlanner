import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { routeContants } from "./Routes/contants";
import Home from "./pages/Home";
import CreateNewItem from "./pages/CreateNewItem";
import ChoosePlatform from "./pages/ChoosePlatform";

import "./App.css";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path={routeContants.mainRoute} element={<ChoosePlatform />} />
        <Route path={routeContants.homeRoute} element={<Home />} />
        <Route path={routeContants.newItemRoute} element={<CreateNewItem />} />
      </Routes>
    </Fragment>
  );
}

export default App;
