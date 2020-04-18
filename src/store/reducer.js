const intialState = {
  course: null,
  chapter: null,
};

const reducer = (state = intialState, action) => {
  //console.log(state);
  switch (action.type) {
    case "SELECTEDCOURSE":
      return { ...state, course: action.value, chapter: null };
    case "SELECTEDCHAPTER":
      return { ...state, chapter: action.value };
    default:
      return state;
  }
};

export default reducer;
