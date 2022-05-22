import { connect } from 'react-redux';
import Paginating from './Pagination';
import { updatePageAC, setReposAC } from '../../redux/SearchReducer'

let mapStateToProps = (state) => {
    return {
        Repos: state.searchPage.Repos,
        User: state.searchPage.User,
        UserName: state.searchPage.UserName,
        Page: state.searchPage.Page
    }
}

const PaginationContainer = connect(mapStateToProps, { updatePageAC, setReposAC })(Paginating)

export default PaginationContainer;