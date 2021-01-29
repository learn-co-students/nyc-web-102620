import { createSlice } from "@reduxjs/toolkit";
import { eatSushi } from "./sushi";

const userSlice = createSlice({
  name: "user",
  initialState: {
    funds: 1000,
  },
  reducers: {
    addMoney: (state, action) => {
      // { type: "user/addMoney", payload: money }
      state.funds += action.payload;
    },
    // subtractMoney: (state, action) => {
    //   state.funds -= action.payload;
    // },
  },
  extraReducers: {
    [eatSushi]: (state, action) => {
      state.funds -= action.payload.price;
    },
  },
});

// actions
export const { addMoney, subtractMoney } = userSlice.actions;

// reducer
export default userSlice.reducer;
