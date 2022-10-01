// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";

import { configureStore } from "@reduxjs/toolkit";
import reducers from "../store/reducers";

export const store = configureStore({
  reducer: {
    reducers,
  },
});
export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
