import { createSlice } from "@reduxjs/toolkit";

const sushiSlice = createSlice({
  name: "sushi",
  initialState: {
    items: [],
    currentIndex: 0,
  },
  reducers: {
    addItems: (state, action) => {
      // payload: [sushi, sushi]
      state.items = action.payload;
    },
    eatSushi: (state, action) => {
      // find
      const sushi = state.items.find((sushi) => sushi.id === action.payload.id);
      sushi.isEaten = true;
    },
  },
});

// actions
export const { addItems, eatSushi } = sushiSlice.actions;

export default sushiSlice.reducer;
