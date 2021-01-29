import { createSlice } from "@reduxjs/toolkit";

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
  },
});

// actions
export const { addMoney } = userSlice.actions;

// reducer
export default userSlice.reducer;
