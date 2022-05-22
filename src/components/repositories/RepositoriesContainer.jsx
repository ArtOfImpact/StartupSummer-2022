import Repositories from './Repositories';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        Repos: state.searchPage.Repos,
        User: state.searchPage.User
    }
}

const RepositoriesContainer = connect(mapStateToProps)(Repositories)

export default RepositoriesContainer;