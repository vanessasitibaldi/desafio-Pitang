import React, {useState, useEffect} from 'react';
import ListComponent from '../Components/ListComponent';
import {getLocalStorage} from '../Utils/Utils'
import '../assets/styles/global.css';
import '../assets/styles/styles.css';


function History() {

const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    const users = getLocalStorage('users');
    setSearchHistory(users);
  },[])

  function renderHistoryList(){
    if(searchHistory){
      return (
        <div>
          <ListComponent list={searchHistory} title={'Ultimos Usuários Pesquisados'}/>
        </div> 
      )
    }else{
      return(
        <div className="history-empty"> 
          <span>Não há histórico de busca no momento</span>
        </div> 
      )
    }
  }
  

  return (
    <div>
      {renderHistoryList()}
    </div>
 )
}

export default History;
