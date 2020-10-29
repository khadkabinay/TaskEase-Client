
const URL = "http://localhost:4000/tasks"


class TaskModel {
    static all = () => {
        return fetch(URL).then(response => response.json());
    }

   

}


export default TaskModel;
