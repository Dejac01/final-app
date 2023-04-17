// import logo from './logo.svg';
import "./App.css";

import Header from "./Header";
import Dashboard from "./Dashboard.jsx";
import { useEffect, useState } from "react";

// const New =require('./views/teacher_comp/New.jsx')

function App() {

  const [students, setStudents] = useState([])
  const [test,setTest] = useState({}) 
  const [teachers, setTeachers] = useState([])

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
      <Dashboard students={students} teachers={teachers}/>
    </div>
  );
}

export default App;
