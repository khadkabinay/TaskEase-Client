
const URL = "http://localhost:4000/users"


class UserModel {
    static all = () => {
        return fetch(URL).then(response => response.json());
    }

    static show = (userId) => {
        return fetch(`${URL}/${userId}`).then(response => response.json());
    }


    
    static create = (userData) => {
        return fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json());
    }



    

}


export default UserModel;
