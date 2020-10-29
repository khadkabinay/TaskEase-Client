import React from 'react';
import TaskModel from '../../models/TaskModel';

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
              {this.displayTask(this.state.users)}
              </div>
          </div>
        )
    }
}

export default TaskList;