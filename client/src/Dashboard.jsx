import React from 'react';
import New from './teacher_comp/New.jsx'
import Calender from './Calender.jsx'
import LessonsUI from "./LessonsUI.jsx";


function Dashboard (props){
  console.log(props)
 return (
    <div>I AM DASHBOARD
    <New/>
    <Calender/>
    <LessonsUI/>
    </div>
  )}

export default Dashboard;