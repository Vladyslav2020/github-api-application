import { SET_USERS_SEARCH, SET_USER_DATA } from "./types";

const initialState = {
    users: [{userName: "", avatar_url: "", repos_cnt: 0, id: 0, login: ""}],
    searchLine: ""
};

export const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_DATA: return {...state, users: [...action.payload]};
        case SET_USERS_SEARCH: return {...state, searchLine: action.payload};
        default: return state;
    }
}