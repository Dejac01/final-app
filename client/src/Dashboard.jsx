import React from "react";
import New from "./teacher_comp/New.jsx";
import Calender from "./Calender.jsx";
import LessonsUI from "./LessonsUI.jsx";
import Quotes from "./Quotes.jsx";
import Progress from "./Progress.jsx";
import Login from "./Login.jsx";
import { useEffect, useState } from "react";

function Dashboard(props) {
  const [validate, setValidate] = useState({name:"test"});
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  function getLogin() {
    return fetch(
      `http://localhost:3000/auth/?contactInfo=${user}&pw=${password}`
    )
      .then((data) => data.json())
      .then((res) => setValidate(...validate, ...res[0]));
  }

  function handleSubmit() {
    getLogin();
  }

  const showStyle = {
    display:"block"
  }

  const hideStyle = {
    display:"none"
  }


  function Active(isValid) {
    if ( isValid && isValid.isValid && isValid.isValid.name) {
      return <div>
        <h1>WELCOME TO YOUR DASHBOARD</h1>
         <div>
          <div></div>
          <div></div>
         </div>
        <Calender />
        <div className="thirty-percent">
          <LessonsUI />
        </div>
        
        <div className="thirty-percent">
        <Progress/>
        </div>
        <div className="thirty-percent">
        <Quotes/> </div>
       
      </div>;
    }
    return null
  }

  console.log(props);
  return (
    <div>
      {/* use css to show and hide log in div using validate property */}
        <div style={!validate? showStyle : hideStyle}>
        <h1>Login Page</h1>
        <form>
          <ul>
            <label htmlFor="contactInfo">Name:</label>
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
        </form>
      </div>
      <Active isValid={validate} />
    </div>
  );
}

export default Dashboard;
