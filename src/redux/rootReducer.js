import { combineReducers } from "redux";
import { usersReducer } from './usersReducer'
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({usersData: usersReducer, user: userReducer});