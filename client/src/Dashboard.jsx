import React from "react";
import New from "./teacher_comp/New.jsx";
import Calender from "./Calender.jsx";
import LessonsUI from "./LessonsUI.jsx";
import Quotes from "./Quotes.jsx";
import Progress from "./Progress.jsx";
import { useEffect, useState } from "react";

function Dashboard(props) {
  const [validate, setValidate] = useState(null);
  // set useState back to null
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [teacher, setTeacher] = useState(false);

  function getTeacher() {
    return teacher ? 1 : 0;
  }

  function getLogin() {
    return fetch(
      `http://localhost:3000/auth/?teacher=${getTeacher()}&contactInfo=${user}&pw=${password}`
    )
      .then((data) => data.json())
      .then((res) => setValidate(res[0]));
  }

  function handleSubmit() {
    getLogin();
  }

  const showStyle = {
    display: "block",
  };

  const hideStyle = {
    display: "none",
  };

  function Active(isValid) {
    if (isValid && isValid.isValid && isValid.isValid.name) {
      return (
        <div>
          <h1>WELCOME TO YOUR DASHBOARD</h1>
          <Calender />
          <div className="wrap">
            <div className="thirty-percent">
              <LessonsUI />
            </div>
            <div className="thirty-percent">
              <Progress />
            </div>
            <div className="thirty-percent">
              <Quotes />
            </div>
          </div>
        </div>
      );
    }
    return null;
  }

  console.log(props);
  return (
    <div>
      {/* use css to show and hide log in div using validate property */}
      <div style={!validate ? showStyle : hideStyle}>
        <h1>Login Page</h1>
        <form>
          <ul>
            <label htmlFor="contactInfo">Contact:</label>
            <input
              type="name"
              id="name"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </ul>
          <button type="button" onClick={handleSubmit}>
            Login
          </button>
          <br></br>
          <label htmlFor="teacher">Teacher</label>
          <input
            type="checkbox"
            id="teacher"
            value={teacher}
            onChange={(e) => setTeacher(!teacher)}
          />
        </form>
      </div>
      <Active isValid={validate} />
    </div>
  );
}

export default Dashboard;
