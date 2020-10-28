
const URL = "http://localhost:4000/users"


class UserModel {
    static all = () => {
        return fetch(URL).then(response => response.json());
    }

    static show = (gameId) => {
        return fetch(`${URL}/${gameId}`).then(response => response.json());
    }



}


export default UserModel;
