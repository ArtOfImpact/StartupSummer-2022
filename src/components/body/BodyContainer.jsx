import Body from "./Body"
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        Repos: state.searchPage.Repos,
        User: state.searchPage.User,
        isFetching: state.searchPage.isFetching
    }
}

const BodyContainer = connect(mapStateToProps)(Body)

export default BodyContainer;
