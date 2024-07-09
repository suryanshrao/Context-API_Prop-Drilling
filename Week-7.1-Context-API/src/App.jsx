import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { Landing } from "./components/Landing";

function App() {
  return (
    <div>
    <BrowserRouter>
      <AppBar/>
      <Routes>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/" element={<Landing/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

function AppBar(){
  const navigate = useNavigate();

  return <div>
  <button onClick={function(){
    navigate("/");
  }}> Landing Page</button>

   {/* onClick={function(){
    window.location.href = "/";
  }} */}

  
  <br />
  <br />
  <button onClick={function(){
    navigate("/dashboard")
  }} >Dashboard</button>
  
  {/* onClick={function(){
   window.location.href = "/dashboard"
  }} */}

  <br />
  <br />
</div>
}

export default App;
