import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
    name: "counter",
    initialState: {
        darkMode: false,
    },
    reducers: {
        setDarkMode: (state, action) => {
            state.darkMode = action.payload;
        },
    },
});

export const { setDarkMode } =
    globalSlice.actions;

export default globalSlice.reducer;