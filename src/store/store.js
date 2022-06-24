import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root.reducer";

//root reducer
//3 arguments

const middleWares = [logger];

export const store = createStore(
  rootReducer,
  {},
  applyMiddleware(...middleWares)
);
