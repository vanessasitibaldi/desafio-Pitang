import constant from './Constants';
import {isFetching}  from '../Ducks/gitHubDucks';

let historySearch = [];

export function searchThunk(user){

  return async dispatch => {
    dispatch(isFetching(true));

    try{
      const consultUser = await constant.get(`/users/${user}`);
      historySearch.push(consultUser.data);
      sessionStorage.setItem('users',JSON.stringify(historySearch));
      localStorage.setItem('user',JSON.stringify(consultUser.data));
      
      const consultRepo = await constant.get(`/users/${user}/repos?per_page=10`);
      await localStorage.setItem('repos',JSON.stringify(consultRepo.data))

      dispatch(isFetching(false));

    }catch(err){
      console.log(err)
    }
  }
}