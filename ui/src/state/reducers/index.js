import IsLoggedInReducer from "./IsLoggedIn";
import UserReducer from "./User";
import CarsReducer from "./Cars";
import { combineReducers } from "redux";

const AllReducers = combineReducers({
    isLogged: IsLoggedInReducer,
    user: UserReducer,
    cars:CarsReducer
})

export default AllReducers