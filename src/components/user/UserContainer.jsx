import User from './User';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        userSearch: state.searchPage.User
    }
}

const UserContainer = connect(mapStateToProps)(User)

export default UserContainer;