import axios from 'axios'
//import {history} from '../../history/history'

export const userService = {
    login,
    logout,
    register,
};

async function login(email, password) {
   return await axios.post('http://localhost:4000/login', {
        email, password
      }) 
        .then((user) => {
          console.log(user.data);
          if(user.data !== null){
          localStorage.setItem('user', JSON.stringify(user.data));
          return user.data
          }
          else{
           return false
          }
        })
        .catch(function (error) {
          console.log(error.message)
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    window.location.replace('/')
}

 async function register(fullname, email, password, phone) {
   return await axios.post('http://localhost:4000/user', {
      fullname, email, password, phone
    })
      .then((user) => {
        return user;
      })
      .catch(function (error) {
        console.log(error);
      });
}