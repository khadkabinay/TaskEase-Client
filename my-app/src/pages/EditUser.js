import React from 'react';
import UserModel from '../models/UserModel';

class EditUser extends React.Component {
    state = {
        name: '',
        username: '',
        email: '',
        image: '',
        phoneNumber: '',
        completedTask: 0,
        role: ''
      
    }

    componentDidMount() {
        this.fetchUser();
    }

    fetchUser = () => {
     UserModel.show(this.props.match.params.id)
            .then(json => {
                this.setState({
                    ...json.user
                    
                 })
            })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        UserModel.edit(this.props.match.params.id, this.state)
            .then(json => {
                this.props.history.push(`/users/${this.props.match.params.id}`)
            })
    }

    handleChange = (event) => { 
            this.setState({
                [event.target.name]: event.target.value
            })
        
    }

    render() {
        return (
            <div>
                <h2>Edit</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='name'>Name</label>
                        <input
                            type='text'
                            name='name'
                            onChange={this.handleChange}
                            value={this.state.name}
                        />
                    </div>
                    <div>
                        <label htmlFor='username'>Username</label>
                        <input
                            type='text'
                            name='username'
                            onChange={this.handleChange}
                            value={this.state.username}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type='text'
                            name='email'
                            onChange={this.handleChange}
                            value={this.state.email}
                        />
                    </div>
                    <div>
                        <label htmlFor="image">Image</label>
                        <input
                            type='text'
                            name='image'
                            onChange={this.handleChange}
                            value={this.state.image}
                        />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber">Phone number</label>
                        <input
                            type='text'
                            name='phoneNumber'
                            onChange={this.handleChange}
                            value={this.state.phoneNumber}
                        />
                    </div>
                  <input type='submit' value='Update User' />
                </form>
            </div>
        )
    }
}

export default EditUser;






















































// import React, { useState, useEffect } from "react";
// import UserModel from "../models/UserModel";


// function EditUser(props) {
//   const [name, setName] = useState("");
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [image, setImage] = useState("");
//   const [password, setPassword] = useState("")
//   const [phoneNumber, setPhoneNumer] = useState("")
//   const [role, setRole] = useState("");




//   useEffect(function(){
//     UserModel.show(props.match.params.id).then((data) => {
//        setName(name)
//        setUsername(username)
//        setEmail(email)
//        setImage(image)
//        setPassword(password)
//        setPhoneNumer(phoneNumber)
//        setRole(role)
//       })

// },[name, username,email,image,password,phoneNumber,role ])


// //   function handleSubmit(event) {
// //     event.preventDefault();
    
// //     UserModel.edit(props.match.params.id, { name, username,email,image,password,phoneNumber,role })
// //     .then(json => {
// //         props.history.push(`/users/${props.match.params.id}`)
// //     })
// //   }

// //   return (
// //     <div>
// //       <h2>New User</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label htmlFor='name'>Name</label>
// //           <input
// //             type='text'
// //             name='name'
// //             onChange={(e) => setName(e.target.value)}
// //             value={name}
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor='username'>Username</label>
// //           <input
// //             type='text'
// //             name='username'
// //             onChange={(e) => setUsername(e.target.value)}
// //             value={username}
// //           />
// //         </div>
// //         <div >
// //           <label htmlFor='email'>Email</label>
// //           <input
// //             type='text'
// //             name='email'
// //             onChange={(e) => setEmail(e.target.value)}
// //             value={email}
// //           />
// //         </div>
// //         <div >
// //           <label htmlFor='image'>Image</label>
// //           <input
// //             type='text'
// //             name='image'
// //             onChange={(e) => setImage(e.target.value)}
// //             value={image}
// //           />
// //         </div>
// //         <div >
// //           <label htmlFor='phoneNumber'>phoneNumber</label>
// //           <input
// //             type='text'
// //             name='phoneNumber'
// //             onChange={(e) => setPhoneNumer(e.target.value)}
// //             value={phoneNumber}
// //           />
// //         </div>
// //         <div >
// //           <label htmlFor='role'>Role</label>
// //           <input
// //             type='text'
// //             name='role'
// //             onChange={(e) => setRole(e.target.value)}
// //             value={role}
// //           />
// //         </div>

// //         <input type='submit' value="Edit" />
// //       </form>
// //     </div>
// //   );
// }

// export default EditUser;
