import React, {useState, useEffect} from 'react';
import ListComponent from '../Components/ListComponent';

import '../assets/styles/global.css';
import '../assets/styles/styles.css';


function History() {

const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    const value = sessionStorage.getItem('users');
    setSearchHistory(JSON.parse(value))
  },[])
  console.log('searchHistory', searchHistory)

  return (
    <div>
        <ListComponent list={searchHistory} title={'Ultimos Usuários Pesquisados'}/>
    </div>  
 );
}

export default History;
