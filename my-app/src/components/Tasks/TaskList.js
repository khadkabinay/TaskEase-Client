import React from 'react';
import {Link} from 'react-router-dom'
import TaskModel from '../../models/TaskModel';
import Task from './Task'

class TaskList extends React.Component {
    state = {
        tasks: [],
    }

    componentDidMount() {
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

    
  displayTask = (tasks)=>{
    return this.state.tasks.map(task =>{
        return <Task task={task}  key={task._id}/>})
    
  }


    render() {
        return (
          <div>
              <div>
              <Link to={`/tasks/new`} style={{color: 'black' , margin:"15px"}}><h1>Add task</h1></Link>
              {this.displayTask(this.state.users)}
              </div>
          </div>
        )
    }
}

export default TaskList;