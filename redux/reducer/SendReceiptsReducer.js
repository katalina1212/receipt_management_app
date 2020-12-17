const initialState = {
  fetching: false,
  fetched: false,
  receipt: {},
  error: false
};

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case "ADDRECEIPTS_ALL_PENDING": {
      return {...state, fetching: true};
    }
    case "ADDRECEIPTS_ALL_FULFILLED": {
      return {...state, fetching: false, fetched: true, error: false, receipt: action.payload};
    }
    case "ADDRECEIPTS_ALL_REJECTED": {
      return {...state, fetching: false, fetched: true, error: true, receipt: []};
    }
    case "ADDRECEIPTS_ALL_DELETE": {
      return {...initialState};
    }
    default: {
      return state;
    }
  }
}