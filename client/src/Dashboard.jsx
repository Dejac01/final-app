import React from 'react';
import New from './teacher_comp/New.jsx'
import Calender from './Calender.jsx'
import LessonsUI from "./LessonsUI.jsx";
import QuoteApi from './QuoteApi.jsx';
import Progress from './Progress.jsx';

function Dashboard (props){
  console.log(props)
 return (
    <div> 
      <h1>WELCOME TO YOUR DASHBOARD</h1>
    <Calender/>
    <LessonsUI/>
    <Progress/>
    <QuoteApi/>
    </div>
  )}

export default Dashboard;