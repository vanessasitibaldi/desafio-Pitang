import React from 'react';
import '../assets/styles/styles.css';
import {formatDate} from '../Utils/Utils'

function ListComponent (props){

    const {list, title} = props;

    function renderReposList(){
        if(list){

        const reposLirtOrganized = list.sort((a,b) => new Date(b.updated_at) - new Date(a.updated_at))
        
        return(
            <main>
                <div className="titulo">
                    <span>
                        <strong>{title}</strong>
                    </span>
                </div>
                <ul>
                    {reposLirtOrganized.map((item, index) => (
                        <li key={index} className='dev-item'>
                            <header>
                                <div className="user-info">
                                    <strong>{item.name ? item.name : item.login }</strong>
                                </div>
                            </header>
                            <p>{item.language}</p>
                            <p>{item.description}</p>
                             <p>Data Atualização: {formatDate(item.updated_at)}</p>
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