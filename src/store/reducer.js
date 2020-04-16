const intialState = {
  adminCourse: null,
};

const reducer = (state = intialState, action) => {
  console.log(action);
  switch (action.type) {
    case "SELECTEDCOURSE":
      return { ...state, adminCourse: action.value };
    default:
      return state;
  }
};

export default reducer;
