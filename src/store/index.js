import { configureStore } from "@reduxjs/toolkit";
import { clickedUserSlice } from "./slices/clickedUserSlice";
import { dataSlice } from "./slices/dataSlice";

const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
    user: clickedUserSlice.reducer,
  },
});

export { store };
