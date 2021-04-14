const initialState = {
  number: 0,
};

const mathReducer = (state = initialState, action) => {
  //   state.number + action.payload;
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        number: state.number + action.payload,
      };
    case "SUB":
      return {
        ...state,
        number: state.number - action.payload,
      };
    case "MUL":
      return {
        ...state,
        number: state.number * action.payload,
      };
    case "DIV":
      return {
        ...state,
        number: state.number / action.payload,
      };

    default:
      return state;
  }
};

export default mathReducer;
