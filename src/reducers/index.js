import { combineReducers } from "redux";
import changeNum from "./UpDown";


const rootReducer = combineReducers({
    changeNum : changeNum
})

export default rootReducer