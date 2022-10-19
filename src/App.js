import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { routeConstants } from "./Routes/constants";
import Home from "./pages/Home";
import ChoosePlatform from "./pages/ChoosePlatform";
import BasicDataPage from "./pages/BasicDataPage";
import FirstPage from "./pages/FirstPage";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path={routeConstants.mainRoute} element={<ChoosePlatform />} />
        <Route path={routeConstants.firstPageRoute} element={<FirstPage />} />
        <Route
          path={routeConstants.BasicDataRoute}
          element={<BasicDataPage />}
        />
        <Route path={routeConstants.homeRoute} element={<Home />} />
      </Routes>
    </Fragment>
  );
}

export default App;
