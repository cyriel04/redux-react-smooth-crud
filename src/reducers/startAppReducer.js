const startAppReducer = (state = [], action) => {
  switch (action.type) {
    case "START":
      return action.data;

    case "ADD":
      return [...state, action.data];

    case "EDIT":
      const updatedItems = state.map(item => {
        if (item.id === action.data.id) {
          return { ...item, ...action.data };
        }
        return item;
      });
      return updatedItems;

    case "DELETE":
      const id = action.data.id;
      return [...state.filter(state => state.id !== id)];

    default:
      return state;
  }
};
export default startAppReducer;
