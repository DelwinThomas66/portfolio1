import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "menu",
  initialState: { activePage: "Home" }, // Ensure initialState is defined
  reducers: {
    setActivePage: (state, action) => {
      state.activePage = action.payload;
    },
  },
});

const themeSlice = createSlice({
  name: "theme",
  initialState: "dark", 
  reducers: {
    toggleTheme: (state) => (state === "light" ? "dark" : "light"),
  },
});

export const { setActivePage } = counterSlice.actions;
export const { toggleTheme } = themeSlice.actions;
const reducers = {
  menuReducer: counterSlice.reducer,
  themeReducer: themeSlice.reducer,
};
export default reducers;

