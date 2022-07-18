import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter-reducer";

const reducer = combineReducers({
  counter: counterReducer
});

const configStore = { reducer };

const store = configureStore(configStore);

export default store;