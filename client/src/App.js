// import logo from './logo.svg';
import "./App.css";
import New from "./teacher_comp/New.jsx";
import Header from "./Header";
import Dashboard from "./Dashboard.jsx";
import { Route, Routes } from "react-router-dom";

// const New =require('./views/teacher_comp/New.jsx')

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/new" element={<New />} />
      </Routes>
    </div>
  );
}

export default App;
