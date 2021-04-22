import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { rootReducer } from "./root.reducer";
import thunk from 'redux-thunk';

let middleWares = [logger, thunk];
export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(...middleWares)));