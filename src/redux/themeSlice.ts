import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { FontText } from "../libs/types";

export interface ITheme {
  theme: "light" | "dark";
  font: FontText;
}

const initialState: ITheme = {
  theme: "light",
  font: "Sans Serif",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<"light" | "dark">) {
      state.theme = action.payload;
    },
    setFont(state, action: PayloadAction<"Sans Serif" | "Serif" | "Mono">) {
      state.font = action.payload;
    },
  },
});

export const selectTheme = (state: RootState) => state.themeReducer.theme;
export const selectFont = (state: RootState) => state.themeReducer.font;

export const { setTheme, setFont } = themeSlice.actions;
export default themeSlice.reducer;
