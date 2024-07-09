import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { Landing } from "./components/Landing";

function App() {
  return (
    <div>
      <div>
        <button onClick={function(){
          window.location.href = "/";
        }}>Landing Page</button>
        <br />
        <br />
        <button onClick={function(){
          window.location.href = "/dashboard"
        }}>Dashboard</button>
        <br />
        <br />
      </div>
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/" element={<Landing/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
