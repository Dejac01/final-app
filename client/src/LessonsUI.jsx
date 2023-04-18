import React from "react";
import { useEffect, useState } from "react";

function LessonsUI(props) {
  const [lessons, setLessons] = useState([]);
  function getLessons() {
    return fetch("http://localhost:3000/lessons/")
      .then((data) => data.json())
      .then((res) => setLessons(res));
  }
  useEffect(() => {
    getLessons();
  }, []);
  return (
    <div>
      <h1 className="hw">Assignments due</h1>
      <table>
      <ul>
        {lessons.map((item, index) => (
          <li key={index}> 
          <a href={item.link}> 
          <li> {item.name} </li>
           <span> {item.dueDate} </span>
           <span> {item.submitted} </span>
          </a>
           

          </li>
        ))}
      </ul>
      </table>
    </div>
  );
}

export default LessonsUI;
