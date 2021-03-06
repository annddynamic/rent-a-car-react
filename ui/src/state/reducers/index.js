import IsLoggedInReducer from "./IsLoggedIn";
import UserReducer from "./User";
import CarsReducer from "./Cars";
import MessageReducer from "./MessageReducer";
import UersInChat from "./UersInChat";
import chatUsers from "./chatUsers";
import { combineReducers } from "redux";

const AllReducers = combineReducers({
    isLogged: IsLoggedInReducer,
    user: UserReducer,
    usersOnline: UersInChat,
    usersToChat: chatUsers,
    cars:CarsReducer,
    message: MessageReducer,
})

export default AllReducers