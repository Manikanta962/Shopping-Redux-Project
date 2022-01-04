import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";

// CREATE ROOTREDUCER- WITH  KEY- VALUE PAIR OF CHILD REDUCER
const rootReducer = combineReducers({
  cartReducer: cartReducer,
});

export default rootReducer;
