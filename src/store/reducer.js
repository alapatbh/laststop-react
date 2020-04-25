const intialState = {
  course: null,
  chapter: null,
  topic: null,
};

const reducer = (state = intialState, action) => {
  //console.log(state);
  switch (action.type) {
    case "SELECTEDCOURSE":
      return { ...state, course: action.value, chapter: null, topic: null };
    case "SELECTEDCHAPTER":
      return { ...state, chapter: action.value, topic: null };
    case "SELECTEDTOPIC":
      return { ...state, topic: action.value };
    default:
      return state;
  }
};

export default reducer;
