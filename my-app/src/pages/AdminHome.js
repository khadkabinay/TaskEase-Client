import React from 'react'
import { useState , useEffect} from "react";
import UserModel from '../models/UserModel'

const AdminHome = () => {
    const [users, setUsers] = useState([]);



    useEffect(function(){
        UserModel.all().then((data) => {
           setUsers(data.users)
          
            
    
          })

    },[users]

    )



    return (
        <div>
            {users.map(user =>{
                return <div>
                    <h1>{user.name}</h1>
                    <img src={user.image} />
                    <h1>{user.email}</h1>

                    </div>
            })}
     
         
        </div>
    );
}


export default AdminHome;



