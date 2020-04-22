
//actions types

export const TYPES = {
    FETCH: 'GIT_HUB/FETCH',
};

//actions
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