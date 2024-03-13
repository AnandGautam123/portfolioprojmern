import { useCallback, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Loader from "./components/Loader";

import Home from "./pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { SetPortfolioData, ReloadData } from "./redux/rootSlice";
import Admin from "./pages/Admin";
import Login from "./pages/Admin/Login";

function App() {
  const { loading, portfolioData, reloadData } = useSelector(
    (state) => state.root
  );
  const dispatch = useDispatch();
  const getPortfolioData = useCallback(async () => {
    try {
      const response = await axios.get("/api/portfolio/get-portfolio-data");
      dispatch(SetPortfolioData(response.data));
      dispatch(ReloadData(false));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    if (!portfolioData) {
      getPortfolioData();
    }
  }, [portfolioData, getPortfolioData]);

  useEffect(() => {
    if (reloadData) {
      getPortfolioData();
    }
  }, [reloadData, getPortfolioData]);

  useEffect(() => {
    if (reloadData) {
      getPortfolioData();
    }
  }, [reloadData, getPortfolioData]);

  return (
    <BrowserRouter>
      {loading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
