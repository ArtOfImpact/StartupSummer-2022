import './RepositoriesEmpty.css'
import ErrorPng from '../../photo/Union.png'

let RepositoriesEmpty = () => {
    return (
        <div className='repositories__empty empty'>
            <img src={ErrorPng} className='empty__img' />
            <span className='empty__text'>Repository list is empty</span>
        </div>
    )
}

export default RepositoriesEmpty