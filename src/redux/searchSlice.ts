import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface ISearch {
  searchValue: string;
}

const initialState: ISearch = {
  searchValue: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const selectSearch = (state: RootState) =>
  state.searchReducer.searchValue;

export const { setSearchValue } = searchSlice.actions;
export default searchSlice.reducer;
