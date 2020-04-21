import React, {useEffect} from 'react';
import ListComponent from '../Components/ListComponent';
import { useSelector } from "react-redux";
import '../assets/styles/global.css';
import '../assets/styles/styles.css';


function Ranking() {

    const history = useSelector(state => state);

    console.log('history', history)

  return (
    <div>
        <h1>Ranking</h1>
    </div>  
 );
}

export default Ranking;
