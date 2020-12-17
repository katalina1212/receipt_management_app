import axios from 'axios';

export function getToken(email, password) {

  axios.defaults.headers.common['x-parse-master-key'] = "yc1eUZuihtuKM2BBRiwFOcTKWFR2axaXzjkVZfK4"
  axios.defaults.headers.common['x-parse-application-id'] = "6ugcyEIJalRkPrvd5kT4DD0ljTplyCgPwU9bGBPZ"
  
    return function(dispatch) {
      axios.post("https://parseapi.back4app.com/parse/login", {email:email, password:password})
        .then((response) => {
          dispatch({type: "LOGIN_ALL_FULFILLED", payload: response.data});
        }).catch((err) => {
          dispatch({type: "LOGIN_ALL_REJECTED", payload: err});
        });
    }
  }