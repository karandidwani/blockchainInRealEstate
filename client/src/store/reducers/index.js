import { combineReducers } from "redux";
import currentUser from "./currentUser";
import errors from "./errors";
import messages from "./messages";
import property from "./property";

const rootReducer = combineReducers({
    currentUser,
    errors,
    messages,
    property
});

export default rootReducer;