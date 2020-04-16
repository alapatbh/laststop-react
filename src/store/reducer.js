const intialState = {
  courses: ["Java", "React", "C#"],
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADDCOURSE":
      console.log(action.value);
      return state;
    default:
      return state;
  }
};

export default reducer;
