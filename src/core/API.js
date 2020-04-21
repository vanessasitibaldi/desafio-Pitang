import constant from './Constants';
import {searchUsers, isFetching, userRepos}  from '../Ducks/gitHubDucks';

let historySearch = [];

export function searchThunk(user){

  return async dispatch => {
    dispatch(isFetching(true));

    try{
      const consultUser = await constant.get(`/users/${user}`);
      dispatch(searchUsers(consultUser.data));
      historySearch.push(consultUser.data)
      console.log('historySearch', historySearch)
      sessionStorage.setItem('users',JSON.stringify(historySearch))
      
      const consultRepo = await constant.get(`/users/${user}/repos?per_page=10`);
      dispatch(userRepos(consultRepo.data));

      dispatch(isFetching(false));

    }catch(err){
      console.log(err)
    }
  }
}