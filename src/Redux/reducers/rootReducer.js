import { combineReducers } from "redux";
import taskReducers from "./taskReducers";

const rootReducer = combineReducers({taskReducers})

export default rootReducer