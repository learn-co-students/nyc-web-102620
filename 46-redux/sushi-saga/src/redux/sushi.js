import { createSlice } from "@reduxjs/toolkit";

const sushiSlice = createSlice({
  name: "sushi",
  initialState: {
    items: [],
    currentIndex: 0,
  },
  reducers: {},
});

export default sushiSlice.reducer;
