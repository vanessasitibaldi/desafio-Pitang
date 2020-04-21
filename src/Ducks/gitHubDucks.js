
//actions types

export const TYPES = {
    SEARCH_USERS: 'GIT_HUB/SEARCH_USERS',
    USER_REPOS: 'GIT_HUB/USER_REPOS',
    HISTORY_SEARCH: 'GIT_HUB/HISTORY_SEARCH',
    FETCH: 'GIT_HUB/FETCH',

};

//actions
export const searchUsers = payload => ({
    type: TYPES.SEARCH_USERS,
    payload
});

export const userRepos = userRepos => ({
    type: TYPES.USER_REPOS,
    userRepos
});

export const isFetching = isFetching => ({
  type: TYPES.FETCH,
  isFetching
})


// reducers

const initialState = {
  isFetching: false,
};

export const gitHubSearch = (state = initialState, action) => {
    const {payload,isFetching, userRepos, history} = action;

    switch (action.type) {
      case TYPES.SEARCH_USERS:
        return {
          ...state,
          payload
        };
      case TYPES.USER_REPOS:
        return {
          ...state,
          userRepos
        };
      case TYPES.HISTORY_SEARCH:
        return {
          ...state,
          history
        };
        case TYPES.FETCH:
        return {
          ...state,
          isFetching
        };
 
      default:
        return state;
    }
  };