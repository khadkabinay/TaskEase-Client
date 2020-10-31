import React from 'react';
import {Link} from 'react-router-dom'
import TaskModel from '../../models/TaskModel';
import Task from './Task'

class TaskList extends React.Component {
 
    state = {
        tasks: [],
        isCompleted: false,
        
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

    
    deleteTask = (id,user) => {
        console.log("deleted ",id, user)

     TaskModel.destroy(id, user).then((json) => {

            const tasks = this.state.tasks.filter((task) => {
              return task._id !== json._id;
            });
            this.setState({tasks});
        });
    };

    

     checkTask = () =>{
         this.setState({
         isCompleted: !this.state.isCompleted
         })

        // console.log(this.state.tasks)
      
     }


    
  displayTask = (tasks)=>{

    return this.props.tasks.map(task =>{
        return <Task task={task}  key={task._id} deleteTask ={this.deleteTask} isCompleted={this.state.isCompleted} checkTask={this.checkTask}/>})
    
  }
 
  
  
  render() {
    
        return (
          <div>
              <div>
              {this.displayTask()}
              </div>
          </div>
        )
    }
}

export default TaskList;