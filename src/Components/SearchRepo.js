import React, {  useState, useEffect} from 'react';
import {searchThunk}  from  '../core/API'
import { useDispatch, useSelector } from "react-redux";
import '../assets/styles/styles.css';


function SearchRepo (){

  const [userSearch , setUserSearch] = useState('');
  const dispatch = useDispatch();

  const user = useSelector(state => state.gitHubSearch);
  console.log('user', user)

  function handleForm(e){
    e.preventDefault()
    dispatch(searchThunk(userSearch));
  }

  return(
      <aside>
          <form onSubmit={handleForm}>
            <div className="input-group">
              <div className="input-block">
                  <input 
                    name='searchRepo' 
                    id='searchRepo' 
                    required
                    value={userSearch}
                    onChange={e => setUserSearch(e.target.value)}
                    placeholder={'Busca de Usuários'}
                  />
              </div>
              <button type='submit'>Buscar</button>
            </div>
          </form>
    </aside> 
  )
}

export default SearchRepo;