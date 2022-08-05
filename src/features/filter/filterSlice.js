import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryIndex: 0,
  currentPage: 1,
  searchValue: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryIndex: (state, action) => {
      state.categoryIndex = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const selectorFilter = (state) => state.filter;

export const { setCategoryIndex, setCurrentPage } = filterSlice.actions;
export default filterSlice.reducer;
