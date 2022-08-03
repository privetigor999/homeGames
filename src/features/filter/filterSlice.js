import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryIndex: 0,
  currentPage: 1,
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
  },
});

export const { setCategoryIndex, setCurrentPage } = filterSlice.actions;
export default filterSlice.reducer;
