import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import ThunkMiddleware from "redux-thunk";

import { adminReducer } from "./reducers/adminReducer";
import contactReducer from "./reducers/contactReducer";
import { dashCategoryReducer } from "./reducers/dashCategoryReducer";
import { dashTagReducer } from "./reducers/dashTagReducer";
import { articalReducer } from "./reducers/articalReducer";
import { homeReducer } from "./reducers/home/homeReducer";
import { likeDislikeReducer } from "./reducers/home/likeDislikeReducer";
import { homeCommentReducer } from "./reducers/home/homeCommentReducer";
import { dashboardReducer } from "./reducers/dashboardIndexReducer";

const rootReducer = combineReducers({
  adminReducer,
  contactReducer,
  dashboradCategory: dashCategoryReducer,
  dashboradTag: dashTagReducer,
  dashboradArtical: articalReducer,
  homeReducer,
  likeDislike: likeDislikeReducer,
  userComment: homeCommentReducer,
  dashboardIndex: dashboardReducer,
});

const middleware = [ThunkMiddleware];

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
