import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  totalItems: 0,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalItems += 1;
      state.totalPrice += action.payload.price;
    },
    removeItem: (state, action) => {
      if (window.confirm("Вы действительно хотите удалить товар?")) {
        const findItem = state.items.find((obj) => obj.id === action.payload);
        state.items = state.items.filter((obj) => obj.id !== findItem.id);
        state.totalItems -= findItem.count;
        state.totalPrice -= findItem.count * findItem.price;
      }
    },
    clearItems: (state) => {
      if (window.confirm("Вы действительно хотите очистить корзину?")) {
        state.items = [];
        state.totalItems = 0;
        state.totalPrice = 0;
      }
    },
    incrementCount: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      findItem.count++;
      state.totalItems++;
      state.totalPrice += findItem.price;
    },
    decrementCount: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem.count) {
        findItem.count--;
        state.totalItems--;
        state.totalPrice -= findItem.price;
      }
    },
  },
});

export const {
  addItem,
  removeItem,
  clearItems,
  incrementCount,
  decrementCount,
} = cartSlice.actions;
export default cartSlice.reducer;
