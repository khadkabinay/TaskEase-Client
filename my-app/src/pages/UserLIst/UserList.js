import React from 'react'
import UserModel from '../../models/UserModel'
import TaskModel from '../../models/TaskModel'
import User from '../../components/User/User'
import TaskList from '../../components/Tasks/TaskList'
import NewTask from '../../components/NewTask/NewTask';
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
        UserModel.destroy(id, task).then((json) => {
            this.fetchUsers()
            this.fetchTasks()
        });
    };




    
        displayUser = (userData) =>{
            return userData.map(user =>{
                return <User user={user}  key={user._id} deleteUser={this.deleteUser} />
            
            
        })

        }

        displayProgressBar = (users) =>{
            return users.map(user =>{
                return <ProgressBar  userProgress ={user}  key={user._id} tasks={this.state.tasks} />
            
                
            })

        }


    render(){
    
    
        return (
    <div className="container-flex p-4">
    
            <div className="row ">
                <div className="col sub-container p-3"><NewTask  history={this.props.history} fetchTasks={this.fetchTasks} fetchUsers={this.fetchUsers}/></div>
                <div className="col sub-container p-3">{ this.displayProgressBar(this.state.users)}</div>
                <div className="w-100"></div>
                <div className="col sub-container" className="user-container">{this.displayUser(this.state.users)}</div>
                <div className="col sub-container"><TaskList tasks={this.state.tasks}  fetchTasks ={this.fetchTasks}/></div>
            </div> 
    </div>

            );

    }
}


export default UserList;





