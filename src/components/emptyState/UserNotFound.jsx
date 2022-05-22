import './UserNotFound.css'
import notFound from '../../photo/user.png'

let NotFound = () => {
    return (
        <div className='not-found'>
            <img src={notFound} className='not-found__img' />
            <span className='no-found__text'>User not found</span>
        </div>
    )
}

export default NotFound