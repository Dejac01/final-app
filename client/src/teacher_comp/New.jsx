import React from "react";
import { useState } from "react";

function New() {
  const [assignment, setAssignment] = useState();
  const [due, setDue] = useState();
  const [link, setLink] = useState();

  function postAssignment() {
    fetch("http://localhost:3000/lessons/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: assignment,
        dueDate: due,
        link: link,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        alert("Assignment Posted");
        // set to null to clear out assignments
        setLink("");
        setAssignment("");
        setDue("");
      });
  }

  function handleSubmit() {
    postAssignment();
  }
  return (
    <div>
      <h1>New Assignment page</h1>
      <form action="/assignments" method="POST">
        Assignment:{" "}
        <input
          type="text"
          name="name"
          value={assignment}
          onChange={(e) => setAssignment(e.target.value)}
        />
        <br />
        Due Date:{" "}
        <input
          type="text"
          name="due"
          value={due}
          onChange={(e) => setDue(e.target.value)}
        />
        <br />
        Link: {""}
        <input
          type="link"
          name="link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <br />
      </form>
      <button
        type="submit"
        name=""
        value="Create Assignment"
        onClick={handleSubmit}
      >
        {" "}
        Submit
      </button>
    </div>
  );
}

export default New;
