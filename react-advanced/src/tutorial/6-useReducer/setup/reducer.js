// reducer function
const reducer = (state, action) => {
  // state - state right before the update & action - what we're trying to do
  // keep in mind that you always need to return some kind of state from reducer otherwise none of the functionality will work

  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "item added",
    };
  }
  if (action.type == "NO_VALUE") {
    return { ...state, isModalOpen: true, modalContent: "please enter value" };
  }

  if (action.type === "CLOSE_MODAL") {
    return { ...state, isModalOpen: false };
  }

  if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter((person) => {
      return person.id !== action.payload;
    });
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "item removed",
    };
  }

  throw new Error("No matching action type");
  // return state; // alternative
};

export default reducer;
