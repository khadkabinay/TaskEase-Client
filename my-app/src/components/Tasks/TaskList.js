import React from 'react';
import {Link} from 'react-router-dom'
import TaskModel from '../../models/TaskModel';
import Task from './Task'

class TaskList extends React.Component {
    state = {
        tasks: [],
    }


    componentDidMount() {
        console.log("task list now ")
        this.fetchTasks();
       
    }


    fetchTasks = () => {
        TaskModel.all()
            .then(json => {
                this.setState({
                    tasks: json.tasks
                })
            })

           
    }

    
    deleteTask = (id,user) => {
        console.log("deleted ",id, user)

     TaskModel.destroy(id, user).then((json) => {

            const tasks = this.state.tasks.filter((task) => {
              return task._id !== json._id;
            });
            this.setState({tasks});
        });
    };





    
  displayTask = (tasks)=>{

    return this.props.tasks.map(task =>{
        return <Task task={task}  key={task._id} deleteTask ={this.deleteTask}/>})
    
  }
 


    render() {
        return (
          <div>
              <div>
              <Link to={`/tasks/new`} style={{color: 'black' , margin:"15px"}}><h1>Add task</h1></Link>
              {this.displayTask()}
              </div>
          </div>
        )
    }
}

export default TaskList;