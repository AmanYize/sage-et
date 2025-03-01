// store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./darkModeSlice";

// Define the root state type
export type RootState = ReturnType<typeof store.getState>;

// Configure the store
const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
  },
});

export default store;
