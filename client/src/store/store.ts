// store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./darkModeSlice";
import userReducer from "./userSlice";
// Define the root state type
export type RootState = ReturnType<typeof store.getState>;

// Configure the store
const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    user: userReducer,
  },
});

export default store;
