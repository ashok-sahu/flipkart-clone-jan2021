import { combineReducers } from "redux";
import authReducer from "../reducers/authReducer";
import userReducer from "../reducers/userReducer";
import productReducer from "../reducers/productReducer";
import orderReducer from "../reducers/orderReducer";
import categoryReducer from "../reducers/categoryReducer";
import pageReducer from "../reducers/pageReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  category: categoryReducer,
  page: pageReducer,
  order: orderReducer,
  product: productReducer,
});

export default rootReducer;
