
const URL = "http://localhost:4000/tasks"


class TaskModel {
    static all = () => {
        return fetch(URL).then(response => response.json());
    }

    static show = (taskId) => {
        return fetch(`${URL}/${taskId}`).then(response => response.json());
    }

       
    static create = (taskData) => {
        return fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskData)
        })
        .then(response => response.json());
    }

   

}


export default TaskModel;
