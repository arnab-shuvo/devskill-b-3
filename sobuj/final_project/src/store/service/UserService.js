// import config from 'config';
import { authHeader } from '../helpers/AuthHeader';
// import { useLocation } from 'react-router-dom';

const apiUrl = "http://172.0.0.0/8080";
export const userService = {
    login,
    logout,
    getAll
};

function login(email, password) {
    // console.log(email, '===email from UserSerive');
    

    // async function loginUser(credentials) {
    //     return fetch("http://localhost:8080/signin", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(credentials),
    //     })
    //       .then((data) => data.json())
    //       .then((json) => json);
    //     //   .then(handleResponse(json));
    //   }
      
    //   const user =  loginUser({
    //     email,
    //     password
    //   })

    //   console.log(user, "===user from userService after API Call");
    //   return user;
      
      
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    return fetch("http://localhost:8080/signin", requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            console.log(user, '=== just after faccing....UserService');
            // console.log(user.userInfo.role, '=== role just after faccing....');

            return user;
            
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${apiUrl}/users`, requestOptions).then(handleResponse);
}

function handleResponse(response) {

    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            // return promise.reject(error);
            return error;
        }

        return data;
    });
}