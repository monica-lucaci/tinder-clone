import React from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import { useCookies } from "react-cookie";
import OnBoarding from "./pages/Onboarding";

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['user'])

    const authToken = cookies.AuthToken

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {authToken && <Route path="/dashboard" element={<Dashboard />} />}
        {authToken && <Route path="/onboarding" element={<OnBoarding />} />}
      </Routes>
    </div>
  );
};

export default App;
