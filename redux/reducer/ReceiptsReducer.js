const initialState = {
  fetching: false,
  fetched: false,
  receipt: {results:[]},
  error: false
};

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case "RECEIPTS_ALL_PENDING": {
      return {...state, fetching: true};
    }
    case "RECEIPTS_ALL_FULFILLED": {
      return {...state, fetching: false, fetched: true, error: false, receipt: action.payload};
    }
    case "RECEIPTS_ALL_REJECTED": {
      return {...state, fetching: false, fetched: true, error: true, receipt: []};
    }
    default: {
      return state;
    }
  }
}