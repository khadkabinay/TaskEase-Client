import React from 'react'
import { Route , withRouter} from 'react-router-dom';
import { useState , useEffect} from "react";
import UserModel from '../models/UserModel'
import TaskModel from '../models/TaskModel'
import User from '../components/User/User'
import TaskList from '../components/Tasks/TaskList'
import NewTask from '../components/Tasks/NewTask';
import ProgressBar from '../components/ProgressBar/ProgressBar'


 class UserList extends React.Component{
  state ={
        users: [],
        tasks: []
    }

     

    componentDidMount() {
       this.fetchTasks()
       this.fetchUsers()
       
    }

     fetchTasks = () =>{
        TaskModel.all()
        .then(json => {
            this.setState({
                tasks: json.tasks
            })
        })

     }

     fetchUsers = () =>{
        UserModel.all().then((data) => {
            this.setState({
                users: data.users
            })
          
         })

     }


    
displayUser = (userData) =>{
   return userData.map(user =>{
       return <User user={user}  key={user._id}/>
     
       
   })
   
}
 
    render(){
        return (
            
            <div className="container">
                    {this.displayUser(this.state.users)}
                    <NewTask  history={this.props.history} fetchTasks={this.fetchTasks}/>
                    <TaskList tasks={this.state.tasks}/>
                    <ProgressBar max ={100} value ={2} />
        
                  
                    
            </div>
            );

    }
}


export default UserList;





