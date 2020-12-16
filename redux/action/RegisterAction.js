import axios from 'axios';

export function registerUser(email, password) {

    axios.defaults.headers.common['x-parse-master-key'] = "yc1eUZuihtuKM2BBRiwFOcTKWFR2axaXzjkVZfK4"
    axios.defaults.headers.common['x-parse-application-id'] = "6ugcyEIJalRkPrvd5kT4DD0ljTplyCgPwU9bGBPZ"
  
    return function(dispatch) {
      axios.post("https://parseapi.back4app.com/classes/_User", {email:email, password:password})
        .then((response) => {
          dispatch({type: "REGISTER_ALL_FULFILLED", payload: response.data});
        }).catch((err) => {
          dispatch({type: "REGISTER_ALL_REJECTED", payload: err});
        });
    }
  }