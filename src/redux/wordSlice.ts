import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { fetchWords } from "./wordSliceFetchAsync";

export interface IWord {
  word: string;
  phonetic: string;
  phonetics: {
    text: string;
    audio: string;
  }[];
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      synonyms: string[];
      antonyms: string[];
      example: string;
    }[];
    synonyms: string[];
    antonyms: string[];
  }[];
  sourceUrls: string[];
}

interface InitialState {
  word:IWord[];
  status: string;
}

const initialState: InitialState = {
  word: [],
  status: "",
};

export const wordSlice = createSlice({
  name: "word",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWords.pending, (state) => {
      state.word = [];
      state.status = "loading";
    });

    builder.addCase(fetchWords.fulfilled, (state, action) => {
      state.word = action.payload;
      state.status = "success";
    });

    builder.addCase(fetchWords.rejected, (state) => {
      state.word = [];
      state.status = "error";
    });
  },
});

export const selectWord = (state: RootState) => state.wordReducer.word;
export const selectStatus = (state: RootState) => state.wordReducer.status;

export const { reset } = wordSlice.actions;
export default wordSlice.reducer;
