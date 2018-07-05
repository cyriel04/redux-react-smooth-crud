import { createStore, combineReducers } from "redux";
import startAppReducer from "../reducers/startAppReducer";

const rootReducer = combineReducers({
  start: startAppReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
