import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
const Dashboard = React.lazy(() => import("./components/Dashboard"))
const Landing = React.lazy(() => import("./components/Landing"))

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
            <Route path="/" element={<Landing />}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

function AppBar() {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={function () {
          navigate("/");
        }}
      >
        {" "}
        Landing Page
      </button>

      {/* onClick={function(){
    window.location.href = "/";
  }} */}

      <br />
      <br />
      <button
        onClick={function () {
          navigate("/dashboard");
        }}
      >
        Dashboard
      </button>

      {/* onClick={function(){
   window.location.href = "/dashboard"
  }} */}

      <br />
      <br />
    </div>
  );
}

export default App;
