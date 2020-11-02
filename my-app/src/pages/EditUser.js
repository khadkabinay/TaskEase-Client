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



















































