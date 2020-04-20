import React from 'react';
import {searchThunk}  from  '../core/API'

import Lottie from 'react-lottie';
import SearchRepo from '../Components/SearchRepo';
import Header from '../Components/Header';
import ListComponent from '../Components/ListComponent';
import InfoComponent from '../Components/InfoComponent';

import * as animationData from '../assets/json/preloader.json';
import { useSelector,useDispatch } from "react-redux";

import '../assets/styles/global.css';
import '../assets/styles/styles.css';

function Home() {

const dispatch = useDispatch();

const isFetching = useSelector(state => state.gitHubSearch.isFetching)  
const userRepos = useSelector(state => state.gitHubSearch.userRepos);
const user = useSelector(state => state.gitHubSearch.payload);


const handleSubmit = values => {
  const search = values.target.searchField.value;
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
      <ListComponent list={userRepos} />
      </>
    )
  }
}

  return (
    <div id='app'>
      <Header />
      <SearchRepo handleSubmit={handleSubmit}/>
      {renderSearchResult()}
    </div>  
 );
}

export default Home;
