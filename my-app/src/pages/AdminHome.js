import React from 'react'
import { useState , useEffect} from "react";
import UserModel from '../models/UserModel'

const AdminHome = () => {
    const [users, setUsers] = useState([]);



    useEffect(function(){
        UserModel.all().then((data) => {
           setUsers(data.users);
            // console.log(data.users)
            
    
          })

    }

    )



    return (
        <div>
            <h1>{users.length} </h1>
         </div>
    );
}

export default AdminHome;



