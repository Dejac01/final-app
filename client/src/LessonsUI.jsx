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
      <h1>Homework Assignments</h1>
      <ul>
        {lessons.map((item, index) => (
          <li key={index}>
           <span> {item.name} </span>
           <span> {item.dueDate} </span>
           <span> {item.submitted} </span>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default LessonsUI;
