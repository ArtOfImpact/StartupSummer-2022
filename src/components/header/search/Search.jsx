import './Search.css'
import React from 'react';
import { NavLink } from 'react-router-dom';

let Search = (props) => {

    let textUpdate = React.createRef();

    let click = () => {
        let text = textUpdate.current.value;
        props.updateUserName(text)
        console.log(text)
    }

    let getInfo = (event) => {
        if (event.key === 'Enter') {
            props.getUsers()
            props.getRepos()
            textUpdate.current.value = '';
        }
    }

    return (
        <div className='container__search'>
            <NavLink to='/Users'><input className='search' onChange={click} ref={textUpdate} onKeyDown={getInfo} /></NavLink>
        </div>
    )
}

export default Search