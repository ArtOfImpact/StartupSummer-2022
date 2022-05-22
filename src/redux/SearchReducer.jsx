const UPDATE_NEW_USER_NAME = 'UPDATE_NEW_USER_NAME';
const SET_USERS = 'SET_USERS';
const SET_REPOS = 'SET_REPOS';
const UPDATE_PAGE = 'UPDATE_PAGE';
const SET_IS_FETCHING = 'SET_IS_FETCHING';

let initialState = {
    User: [],
    UserName: '',
    Repos: [],
    Page: 1,
    isFetching: false
}

const reducerSearch = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS: {
            return { ...state, User: action.User }
        }
        case UPDATE_NEW_USER_NAME: {
            return { ...state, UserName: action.NewText }
        }
        case SET_REPOS: {
            return { ...state, Repos: action.Repos }
        }
        case UPDATE_PAGE: {
            return { ...state, Page: action.Page }
        }
        case SET_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        default:
            return state;
    }
}

export default reducerSearch;

export const setUsersAC = (User) => {
    return {
        type: SET_USERS, User
    }
}

export const setReposAC = (Repos) => {
    return {
        type: SET_REPOS, Repos
    }
}

export const updateUserNameAC = (text) => {
    return {
        type: UPDATE_NEW_USER_NAME, NewText: text
    }
}

export const updatePageAC = (Page) => {
    return {
        type: UPDATE_PAGE, Page
    }
}

export const setIsFetchingAC = (isFetching) => {
    return {
        type: SET_IS_FETCHING, isFetching
    }
}