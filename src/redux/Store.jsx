import { combineReducers, legacy_createStore as createStore } from "redux";
import ReducerSearch from "./SearchReducer";




let reducers = combineReducers({
    searchPage: ReducerSearch
});

let Store = createStore(reducers);

window.store = Store;

export default Store;