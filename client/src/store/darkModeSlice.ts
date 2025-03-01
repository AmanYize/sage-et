// store/darkModeSlice.ts
import { createSlice } from "@reduxjs/toolkit";

// Define the state type
interface DarkModeState {
  isDarkMode: boolean;
}

// Initial state
const initialState: DarkModeState = {
  isDarkMode: false, // Default to light mode
};

// Create the slice
const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

// Export actions and reducer
export const { toggleDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
