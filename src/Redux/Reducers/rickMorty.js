const initialState = {
  results: {},
  info: {},
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  err: {},
};

const rickMortyReducer = (state = initialState, { type, payload }) => {
  //   state.number + action.payload;
  //   const { type, payload } = action;
  switch (type) {
    case "GET_CHARACTER_PAGINATED_PENDING":
      return {
        ...state,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };
    case "GET_CHARACTER_PAGINATED_FULFILLED":
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        results: payload.data.results,
        info: payload.data.info,
      };
    case "GET_CHARACTER_PAGINATED_REJECTED":
      return {
        ...state,
        isRejected: true,
        isPending: false,
        err: payload,
      };
    default:
      return state;
  }
};

export default rickMortyReducer;
