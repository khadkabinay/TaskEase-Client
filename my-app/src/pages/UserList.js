import React from 'react'
import { useState , useEffect} from "react";
import UserModel from '../models/UserModel'
import User from '../components/User/User'
import TaskList from '../components/Tasks/TaskList'
import NewTask from '../components/Tasks/NewTask';




const UserList = (props) => {
    const [users, setUsers] = useState([]);
    const [foundUser, setFoundUser] = useState([]);

    useEffect(function(){
        UserModel.all().then((data) => {
           setUsers(data.users)
           
          })
        

    },[])
    

    useEffect(function(){
        UserModel.show(props.match.params._id).then((data) => {
           setFoundUser(data.foundUser)
          })

          console.log(foundUser)

    },[])




    // useEffect(function(){
    //     UserModel.show(props.match.params.id).then((data) => {
    //        setUser(data.user)
    
    //       })
    //       console.log(user)

    // },[user])



    // function deleteUser(event){
    //     event.preventDefault();
    //     UserModel.destroy().then(data =>{
    //         const users = users.filter((user) => {
    //             return user._id !== data._id;
    //           });
              
    //           setUsers(users)
              
    //         }
    //     );
    //   }






function displayUser(userData){
   return userData.map(user =>{
       return <User user={user}  key={user._id}/>
     
       
   })
   
}
 
    


return (
    <div className="container">
            {displayUser(users)}
            {/* <NewTask /> */}
            <TaskList />

          
            
    </div>
    );
}


export default UserList;










