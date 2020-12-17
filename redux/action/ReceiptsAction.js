import axios from 'axios';

export function getReceipts(objectId) {

  axios.defaults.headers.common['x-parse-master-key'] = "yc1eUZuihtuKM2BBRiwFOcTKWFR2axaXzjkVZfK4"
  axios.defaults.headers.common['x-parse-application-id'] = "6ugcyEIJalRkPrvd5kT4DD0ljTplyCgPwU9bGBPZ"
  
    return function(dispatch) {
      axios.get("https://parseapi.back4app.com/classes/Receipt?where={\"userObjectId\":\""+objectId+"\"}")
        .then((response) => {
          dispatch({type: "RECEIPTS_ALL_FULFILLED", payload: response.data});
        }).catch((err) => {
          dispatch({type: "RECEIPTS_ALL_REJECTED", payload: err});
        });
    }
  }

  export function addReceipts(objectId, title, price, category) {

    axios.defaults.headers.common['x-parse-master-key'] = "yc1eUZuihtuKM2BBRiwFOcTKWFR2axaXzjkVZfK4"
    axios.defaults.headers.common['x-parse-application-id'] = "6ugcyEIJalRkPrvd5kT4DD0ljTplyCgPwU9bGBPZ"
    
      return function(dispatch) {
        axios.post("https://parseapi.back4app.com/classes/Receipt", {userObjectId:objectId, title:title, price:price, category:category})
          .then((response) => {
            dispatch({type: "ADDRECEIPTS_ALL_FULFILLED", payload: response.data});
          }).catch((err) => {
            dispatch({type: "ADDRECEIPTS_ALL_REJECTED", payload: err});
          });
      }
    }

    export function deleteReceipts() {
      return function(dispatch){
        dispatch({type: "ADDRECEIPTS_ALL_DELETE"});
      }
    }