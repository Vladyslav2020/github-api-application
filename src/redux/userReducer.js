import { SET_CHOOSED_USER, SET_SEARCH_LINE } from './types';

const initialState = {
    searchLine: "",
    userName: "", 
    userEmail: "",
    joinDate: "",
    location: "",
    followers: 0,
    following: 0,
    avatar_url: "",
    biography: "",
    repos: [{name: "", forks: 0, stars: 0, url: '', id: 0}]
}

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_CHOOSED_USER: return {...state,...action.payload};
        case SET_SEARCH_LINE: return {...state, searchLine: action.payload};
        default: return state;
    }
}