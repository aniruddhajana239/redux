import { createStore } from "redux";
import RootReducers from "./components/reducer/index";

export const DataStore = createStore(RootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());