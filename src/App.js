import { Fragment, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConstants } from './Routes/constants';
import Home from './pages/Home';
import ChoosePlatform from './pages/ChoosePlatform';
import BasicDataPage from './pages/BasicDataPage';
import FirstPage from './pages/FirstPage';
import Graphs from './pages/Graphs';
import { useDispatch } from 'react-redux';
import { setObjectsList } from './redux/ObjectsDataSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const listFromStorage = JSON.parse(localStorage.getItem('objects'));
    // console.log(listFromStorage);
    dispatch(setObjectsList(listFromStorage));
  }, []);

  return (
    <Fragment>
      <Routes>
        <Route path={routeConstants.mainRoute} element={<ChoosePlatform />} />
        <Route path={routeConstants.firstPageRoute} element={<FirstPage />} />
        <Route
          path={routeConstants.BasicDataRoute}
          element={<BasicDataPage />}
        />
        <Route path={routeConstants.GraphsRoute} element={<Graphs />} />
        <Route path={routeConstants.homeRoute} element={<Home />} />
      </Routes>
    </Fragment>
  );
}

export default App;
