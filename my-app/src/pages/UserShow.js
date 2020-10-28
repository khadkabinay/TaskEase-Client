import React from 'react'
import { useState , useEffect} from "react";
import UserModel from '../models/UserModel'
import User from '../components/User/User'


const UserShow = (props) => {
    const [user, setUser] = useState([]);


    useEffect(function(){
        UserModel.show(props.match.params.id).then((data) => {
           setUser(data.user)
          })

    },[user])
    

    return (
    <div >
     <User user={user}/>
            
    </div>
    );
}



export default UserShow;
