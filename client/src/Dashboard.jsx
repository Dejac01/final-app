import React from 'react';
import New from './teacher_comp/New.jsx'
import Calender from './Calender.jsx'
import LessonsUI from "./LessonsUI.jsx";


function Dashboard (props){
  console.log(props)
 return (
    <div> 
      <h1>WELCOME TO YOUR DASHBOARD</h1>
    <Calender/>
    <LessonsUI/>
    </div>
  )}

export default Dashboard;