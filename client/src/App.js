// import logo from './logo.svg';
import "./App.css";
import New from "./teacher_comp/New.jsx";
import Header from "./Header";
import Dashboard from "./Dashboard.jsx";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import { BrowserRouter as Router } from 'react-router-dom';

// const New =require('./views/teacher_comp/New.jsx')

function App() {

  const [students, setStudents] = useState([])
  const [test,setTest] = useState({}) 
  const [teachers, setTeachers] = useState([])
  const [lessonUI, setLessonUI] = useState([])

  function getStudents() {
    return fetch("http://localhost:3000/students/").then((data) =>
     data.json()
    ).then(res => setStudents(res));
  }

  function getTeachers() {
    return fetch("http://localhost:3000/teachers/").then((data) =>
     data.json()
    ).then(res => setTeachers(res));
  }

  

  function testLogin() {
    return fetch("http://localhost:3000/auth/?teacher=true&contactInfo=email&pw=project").then((data) =>
     data.json()
    ).then(res => {console.log(res);setTest({...test, ...res[0]});});
  }
  useEffect(() => {
    getTeachers();
    getStudents();
    testLogin();
  }, []); 

  return (
    <div className="App">
      <Header />
      <Routes>
  <Route path="/" element={<Login/>}/>
  <Route path="/dashboard" element={<Dashboard/>}/>
  <Route path="/new" element={<New/>}/>
  </Routes>
    </div>
  );
}

export default App;
