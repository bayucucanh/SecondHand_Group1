import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";

const AllReducers = combineReducers({
  login: LoginReducer
})

export default AllReducers