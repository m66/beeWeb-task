import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice";
import blockReducer from "./blockSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    block: blockReducer,
  },
});
