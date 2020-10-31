
const URL = "http://localhost:4000/auth";


class AuthModel {
  static register = (data) => {
    return fetch(`${URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
  };

}

export default AuthModel;
