import React from 'react';
import '../assets/styles/styles.css';


function InfoComponent (props){
    const {user} = props;
    console.log('InfoComponent',user )

function renderInfosUser(){
    if(user){
        return(
            <div className="info-user-wrapper">
                <ul>
                    <li key={user.id} className='info-user-item'>
                        <header>
                            <img src={user.avatar_url} alt={user.name}/>
                            <div className="user-info">
                                <strong>{user.name}</strong>
                                {/* <span>{dev.techs}</span> */}
                            </div>
                        </header>
                        <p>{user.location}</p>
                        <p>{user.bio}</p>
                        <a href={user.blog}>blog</a>
                    </li>
                </ul> 
        </div>
        )
    }
}

    return( 
        <>
            {renderInfosUser()}
        </>
    )
}

export default InfoComponent;