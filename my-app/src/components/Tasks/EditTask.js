import React from 'react';
import TaskModel from '../../models/TaskModel';

class EditTask extends React.Component {
    state = {
        name: '',

      
    }

    componentDidMount() {
        this.fetchTask();
    }

    fetchTask = () => {
     TaskModel.show(this.props.match.params.id)
            .then(json => {
                this.setState({
                    ...json.task
                    
                 })
            })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        TaskModel.edit(this.props.match.params.id, this.state)
            .then(json => {
                this.props.history.push(`/users`)
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
                <h2>Edit a task</h2>
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
                  <input type='submit' value='Update task' />
                </form>
            </div>
        )
    }
}

export default EditTask;






































