const initialState = {
  fetching: false,
  fetched: false,
  user:{},
  error: false
};

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case "LOGIN_ALL_PENDING": {
      return {...state, fetching: true};
    }
    case "LOGIN_ALL_FULFILLED": {
      return {...state, fetching: false, fetched: true, error: false, user: action.payload};
    }
    case "LOGIN_ALL_REJECTED": {
      return {...state, fetching: false, fetched: true, error: true, user: {}};
    }
    default: {
      return state;
    }
  }
}