import { createSlice } from "@reduxjs/toolkit";

const clickedUserSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    currentUser(state, action) {
      return action.payload;
    },
  },
});

export { clickedUserSlice };
