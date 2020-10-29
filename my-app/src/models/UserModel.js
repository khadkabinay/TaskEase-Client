
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


    static edit = (userId, userData) => {
        return fetch(`${URL}/${userId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json());
    
    
    }

    static destroy = (userId)=>{
        return fetch(`${URL}/${userId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        
        })
        .then(response => response.json());
       
        

    }






}


export default UserModel;
