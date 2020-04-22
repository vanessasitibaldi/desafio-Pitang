
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

;

export const isFetching = isFetching => ({
  type: TYPES.FETCH,
  isFetching
})


// reducers

const initialState = {
  isFetching: false,
};

export const gitHubSearch = (state = initialState, action) => {
    const {isFetching} = action;

    switch (action.type) {
        case TYPES.FETCH:
        return {
          ...state,
          isFetching
        };
 
      default:
        return state;
    }
  };