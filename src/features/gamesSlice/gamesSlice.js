import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGames = createAsyncThunk(
  "game/fetchGamesStatus",
  async (params, thunkApi) => {
    const { category, search, currentPage } = params;
    const res = await axios.get(
      `https://62e2b9d23891dd9ba8eec3f3.mockapi.io/items?page=${currentPage}&limit=12&${category}${search}`
    );
    return res.data;
  }
);
const initialState = {
  items: [],
  status: "loading", // loading, success, error
};

const gamesSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchGames.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchGames.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [fetchGames.rejected]: (state) => {
      state.status = "error";
      state.items = [];
    },
  },
});

export const selectorGames = (state) => state.games;

export const { setItems } = gamesSlice.actions;
export default gamesSlice.reducer;
