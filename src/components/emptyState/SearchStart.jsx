import magnifier from '../../photo/image.png'
import './SearchStart.css'

let InitialState = () => {
    return (
        <div className='state'>
            <img src={magnifier} className='state__img' />
            <span className='text'>Start with searching
                a GitHub user</span>
        </div>
    )
}

export default InitialState;