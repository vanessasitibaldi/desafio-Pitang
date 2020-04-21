import React, {useEffect , useState} from 'react';
import {searchThunk}  from  '../core/API'
import Lottie from 'react-lottie';
import SearchComponent from '../Components/SearchComponent';
import Header from '../Components/Header';
import ListComponent from '../Components/ListComponent';
import InfoComponent from '../Components/InfoComponent';
import * as animationData from '../assets/json/preloader.json';
import { useSelector,useDispatch } from "react-redux";
import {getLocalStorage} from '../Utils/Utils'
import '../assets/styles/global.css';
import '../assets/styles/styles.css';


function Home() {
const dispatch = useDispatch();

const [userRepos, setUserRepos] = useState([]);
const [user, setUser] = useState([]);

const isFetching = useSelector(state => state.gitHubSearch.isFetching)  

useEffect(() => {
  const user = getLocalStorage('user')
  const repos = getLocalStorage('repos')
  setUserRepos(repos);
  setUser(user);
},[isFetching])


function handleSubmit(values){
  const search = values.searchField;
  dispatch(searchThunk(search));
}

const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: animationData.default,
};

function renderSearchResult(){
  if(isFetching){
    return <Lottie options={defaultOptions} height={200} width={200} />
  }else{
    return (
      <>
      <InfoComponent user={user} />
      <ListComponent list={userRepos} title={'Lista de Repostórios'} />
      </>
    )
  }
}

  return (
    <div id='app'>
      <Header />
      <SearchComponent handleSubmit={handleSubmit}/>
      {renderSearchResult()}
    </div>  
 );
}

export default Home;
