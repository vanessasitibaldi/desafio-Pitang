import React from 'react';
import '../assets/styles/styles.css';


function ListComponent (props){
    
const userRepos = props.list;

function renderReposList(){
    if(userRepos){
        return(
            <main>
                <div className="titulo">
                    <span>
                        <strong>Lista de Repositórios</strong>
                    </span>
                </div>
                <ul>
                    {userRepos.map(item => (
                        <li key={item.id} className='dev-item'>
                            <header>
                                <div className="user-info">
                                    <strong>{item.name}</strong>
                                </div>
                            </header>
                            <p>{item.language}</p>
                            <p>{item.description}</p>
                            <a href={item.html_url}>Acessar repositorio</a>
                        </li>
                    ))}
                </ul>
        </main>
        )
    }
}

    return( 
        <>
            {renderReposList()}
        </>
    )
}

export default ListComponent;