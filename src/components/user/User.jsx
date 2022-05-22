import avatarPNG from '../../photo/avatar.jpg'
import iconGroup from '../../photo/Group.svg'
import iconPerson from '../../photo/Person.svg'
import './User.css'

let User = (props) => {
    return (<div className='content__user user'>
        <div className='user__img'>
            <img className="img" src={props.userSearch.avatar_url !== null ? props.userSearch.avatar_url : avatarPNG} />
        </div>
        <div className='user__name'>
            <span className='name'>{props.userSearch.name}</span>
        </div>
        <div className='user__username'>
            <span className='username'><a target="_blank" href={props.userSearch.html_url}>{props.userSearch.login}</a></span>
        </div>
        <div className='user__subscriptions subscriptions'>
            <div className='subscriptions__followers'>
                <img src={iconGroup} /><span> {props.userSearch.followers} followers</span>
            </div>
            <div className='subscriptions__following'>
                <img src={iconPerson} /><span> {props.userSearch.following} following</span>
            </div>
        </div>
    </div>
    )
}

export default User
