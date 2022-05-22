import RepositoriesContainer from "../repositories/RepositoriesContainer"
import RepositoriesEmpty from "../emptyState/RepositoriesEmpty"
import UserNotFound from "../emptyState/UserNotFound"
import UserContainer from "../user/UserContainer"
import './Body.css'

const Body = (props) => {
    if (props.User.length === 0) {
        return (<div className='content'>
            <UserNotFound />
        </div>
        )
    } else if (props.isFetching === true) {
        return (
            <div className='content'>
                <div className="container__loader">
                    <div className="loader"></div>
                </div>
            </div>
        )
    }
    else if (props.Repos.length === 0) {
        return (
            <div className='content'>
                <UserContainer />
                <RepositoriesEmpty />
            </div>)
    }
    else {
        return (<div className='content'>
            <UserContainer />
            < RepositoriesContainer />
        </div>)
    }
}

export default Body
