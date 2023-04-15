import React from 'react';

function New () {
  
   
    return (
      <div>
        <nav>
          <a href="/assignments/new">Create a New Assignment</a>
        </nav>
        <h1>New Assignment page</h1>
        <form action="/assignments" method="POST">
          Assignment: <input type="text" name="name" />
          <br />
          Due Date: <input type="text" name="dueDate" />
          <br />
          Post: <input type="checkbox" name="readyToPost" />
          <br />
          <input type="submit" name="" value="Create Assignment" />
        </form>
      </div>
    );
  }


export default New;