import Header from './Header'
import { connect } from 'react-redux';
import { setUsersAC, updateUserNameAC, setReposAC, setIsFetchingAC } from '../../redux/SearchReducer'

let mapStateToProps = (state) => {
    return {
        userSearch: state.searchPage,
        UserName: state.searchPage.UserName,
        Page: state.searchPage.Page
    }
}

const HeaderContainer = connect(mapStateToProps, { setUsersAC, updateUserNameAC, setReposAC, setIsFetchingAC })(Header)

export default HeaderContainer;

