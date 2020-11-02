import React from 'react'
import { Route , withRouter} from 'react-router-dom';
import { useState , useEffect} from "react";
import UserModel from '../../models/UserModel'
import TaskModel from '../../models/TaskModel'
import User from '../../components/User/User'
import TaskList from '../../components/Tasks/TaskList'
import NewTask from '../../components/Tasks/NewTask';
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import './UserList.css'







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


    deleteUser = (id,task) =>{
        console.log("deleted ",id, task)
  
      UserModel.destroy(id, task).then((json) => {
     console.log(json, "json is here")
            // const users = this.state.users.filter((user) => {
            //     console.log(user,json.user, "user and json")
            //   return user._id !== json.user._id;
            // });
            // console.log(users, "user info")
            // this.setState({users});
            this.fetchUsers()
            this.fetchTasks()
        });
    };




    
displayUser = (userData) =>{
   return userData.map(user =>{
       return <User user={user}  key={user._id} deleteUser={this.deleteUser}/>
     
       
   })
   
}

 displayProgressBar = (users) =>{
    return users.map(user =>{
        return <ProgressBar  userProgress ={user}  key={user._id}/>
      
        
    })

 }





 
    render(){
        console.log("userlist render")
        return (
    <div className="container">
       
  <div className="row ">
    <div className="col sub-container p-3">{ this.displayProgressBar(this.state.users)}</div>
    <div className="col sub-container p-3"><NewTask  history={this.props.history} fetchTasks={this.fetchTasks} fetchUsers={this.fetchUsers}/></div>
    <div className="w-100"></div>
    <div className="col sub-container">{this.displayUser(this.state.users)}</div>
    <div className="col sub-container"><TaskList tasks={this.state.tasks}  fetchTasks ={this.fetchTasks}/></div>
  </div>
</div>

            
            // <div className="d-flex">
            //         {this.displayUser(this.state.users)}
            //         { this.displayProgressBar(this.state.users)}
            //         <NewTask  history={this.props.history} fetchTasks={this.fetchTasks}/>
            //         <TaskList tasks={this.state.tasks}/>
            //         {/* <ProgressBar max ={100} value ={10} /> */}
        
                  
                    
            // </div>
            );

    }
}


export default UserList;




