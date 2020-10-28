
const URL = "http://localhost:4000/users"


class UserModel {
    static all = () => {
        return fetch(URL).then(response => response.json());
    }



}


export default UserModel;
