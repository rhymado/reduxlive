import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import rpm from "redux-promise-middleware";

import mathReducer from "./Reducers/math";
import rickMortyReducer from "./Reducers/rickMorty";

const logger = createLogger();
const enhancers = applyMiddleware(rpm, logger);
const reducers = combineReducers({
  mathReducer,
  rickMortyReducer,
});
const reduxStore = createStore(reducers, enhancers);

export default reduxStore;
