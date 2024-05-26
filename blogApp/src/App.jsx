import { useEffect, useState } from "react";
import "./App.css";
import {useDispatch } from "react-redux";

import authService from "./appwrite/auth";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

//actions
import { login, logout } from "./store/authSlice";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  //use effect to verify login and logout

  useEffect(() => {
    authService
      .getUserAccount()
      .then((userData) => {
        if (userData) {
          //dispatch and send to login in authSlice
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .finally();
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          TODO: <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
