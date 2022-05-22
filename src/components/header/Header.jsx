import CatLogo from '../../photo/catLogo3.png'
import './Header.css'
import Search from './search/Search'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

let Header = (props) => {

    let getUsers = () => {
        props.setIsFetchingAC(true)
        axios.get(`https://api.github.com/users/${props.UserName}`)
            .then(response => {
                props.setUsersAC(response.data)
                console.log(response.data)
            })
            .catch(err => {
                props.setUsersAC('')
            })
    }

    let getRepos = () => {
        axios.get(`https://api.github.com/users/${props.UserName}/repos?per_page=4&page=${props.Page}`)
            .then(response => {
                props.setReposAC(response.data)
                props.setIsFetchingAC(false)
                console.log(response.data)
            });
    }

    let deleteUserInfo = () => {
        return (
            props.updateUserName('')
        )
    }

    return (<div className='header'>
        <div className='header__container'>
            <div className='container'>
                <div className='container__logo'>
                    <NavLink to='' onClick={deleteUserInfo}> <img src={CatLogo} className='logo' /></NavLink>
                </div>
                <Search UserName={props.UserName} getUsers={getUsers} updateUserName={props.updateUserNameAC} getRepos={getRepos} user={props.userSearch.User} />
            </div>
        </div>
    </div>
    )
}

export default Header