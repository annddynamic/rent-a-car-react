import IsLoggedInReducer from "./IsLoggedIn";
import UserReducer from "./User";
import { combineReducers } from "redux";

const AllReducers = combineReducers({
    isLogged: IsLoggedInReducer,
    user: UserReducer
})

export default AllReducers