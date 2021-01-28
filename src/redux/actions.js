import { SET_CHOOSED_USER, SET_SEARCH_LINE, SET_USER_DATA, SET_USERS_SEARCH } from "./types"

export const setUserData = (data) => {
    return {
        type: SET_USER_DATA,
        payload: data
    }
}

export const setChoosedUser = (data) => {
    return {
        type: SET_CHOOSED_USER,
        payload: {...data}
    }
}

export const setSearchLine = (str) => {
    return {
        type: SET_SEARCH_LINE,
        payload: str
    }
}

export const setUsersSearch = (str) => {
    return{
        type: SET_USERS_SEARCH, 
        payload: str
    }
}

export const downloadUsers = (value) => {
    return dispatch => {
        (async () => {
            try{
                const response = await fetch(`https://api.github.com/search/users?q=${value}&per_page=10`);
                const dt = await response.json();
                let queries = [];
                for (let item of dt.items){
                     queries.push(fetch(`https://api.github.com/users/${item.login}`));
                }
                let userData = [];
                Promise.all(queries)
                    .then(values => Promise.all(values.map(query => query.json())))
                    .then(values => {
                        values.forEach(item => {
                            userData.push({userName: item.name, avatar_url: item.avatar_url,
                            repos_cnt: item.public_repos, id: item.id, login: item.login});
                        });
                        dispatch(setUserData(userData));   
                    });   
            }
            catch(err) {
                console.log("Error:", err.message);
            }
        })()
    }
}

export const downloadUserData = (userName) => {
    return dispatch => {
        (async () => {
            try{
                const userData = {};
                let response = await fetch('https://api.github.com/users/' + userName);
                let data = await response.json();
                userData.userName = data.name;
                userData.userEmail = data.email;
                userData.joinDate = data.created_at;
                userData.location = data.location;
                userData.followers = data.followers;
                userData.following = data.following;
                userData.avatar_url = data.avatar_url;
                userData.biography = data.bio;
                response = await fetch('https://api.github.com/users/' + userName + '/repos');
                data = await response.json();
                dispatch(setSearchLine(""));
                userData.repos = data.map(item => {
                    return{name: item.name, forks: item.forks_count, stars: item.stargazers_count, id: item.id, url: item.html_url}});
                dispatch(setChoosedUser(userData));
            }
            catch(err){
                console.log(err);
            }
        })();
    }
}