import constant from './Constants';
import {searchUsers, isFetching, userRepos,history}  from '../Ducks/gitHubDucks';

let historySearch = [];

export function searchThunk(user){
  
  return async dispatch => {
    dispatch(isFetching(true));
    try{
      const consultUser = await constant.get(`/users/${user}`);
      historySearch.push(consultUser.data)
      dispatch(searchUsers(consultUser.data));
      dispatch(history(historySearch))

      const consultRepo = await constant.get(`/users/${user}/repos?per_page=10`);
      dispatch(userRepos(consultRepo.data));

      dispatch(isFetching(false));

    }catch(err){
      console.log(err)
    }
  }
}