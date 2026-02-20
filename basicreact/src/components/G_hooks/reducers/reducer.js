export const countReducer = function (state, action) {
  switch (action.type) {
    case "INCRESE":
      return state + 1;
    case "DECRESE":
      return state - 1;
    case "INITIAL":
      return 0;
    default:
      return state;
  }
};

const formData = {
  userId: "",
  password: "",
  userName: "",
  agreed: false,
};
export const formMemberReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, [action.field]: action.payload };
    case "RESET":
      return formData;
    default:
      return state;
  }
};
