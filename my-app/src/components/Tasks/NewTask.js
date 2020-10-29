import React, { useState } from "react";
import TaskModel from '../../models/TaskModel' 
import UserModel from '../../models/UserModel' 


function NewTask(props) {
  const [name, setName] = useState("");
  const [date, setDate] = useState(Date);
  const [iscompleted, setIsCompleted] = useState(false);
  const [user, setUser] = useState([]);
 
  
 


  function handleSubmit(event) {
    event.preventDefault();

    TaskModel.create({ name,date, iscompleted,user }).then(
      (data) => {
        props.history.push("/users");
      }
    );
  }

//  function fetchUsers(){
//      UserModel.all().then((data) => {
//        return data.users.map(user => user.name)
      
//      })

//  }

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
       
        <div>
       User's name 
        <select >
            <option >
                name goes here
               
            </option>
        </select>
        
        </div>
      
        
        <input type='submit' value="Add a task" />
      </form>
    </div>
  );
}

export default NewTask;
