import React, { useState } from "react";
import TaskModel from '../../models/TaskModel' 


function NewTask(props) {
  const [name, setName] = useState("");
  const [date, setDate] = useState(Date);
  const [iscompleted, setIsCompleted] = useState(false);
 


  function handleSubmit(event) {
    event.preventDefault();

    TaskModel.create({ name,date, iscompleted }).then(
      (data) => {
        props.history.push("/users");
      }
    );
  }

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        

        <input type='submit' value="Add a task" />
      </form>
    </div>
  );
}

export default NewTask;
