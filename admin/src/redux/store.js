import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/rootReducers";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger,thunk))
);
export default store;
