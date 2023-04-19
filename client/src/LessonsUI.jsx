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
      <ul>
        {lessons.map((item, index) => (
          <li key={item._id}>
            <a href={item.link}>
              <span> {item.name} &nbsp;</span>
              <br></br>
              <span> {item.dueDate} </span>
            </a>
          </li>
        ))}
      </ul>
      {props.teacher ? (
        <a className="button" href="/new">
          Create New Assignment
        </a>
      ) : null}
    </div>
  );
}

export default LessonsUI;
