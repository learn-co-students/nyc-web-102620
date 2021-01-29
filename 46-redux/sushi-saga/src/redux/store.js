import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import sushiReducer from "./sushi";

const store = configureStore({
  reducer: {
    sushis: sushiReducer,
    user: userReducer,
  },
});

export default store;
