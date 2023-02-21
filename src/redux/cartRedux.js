import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;

      state.products.push(action.payload);

      state.total += action.payload.price * action.payload.quantity;
    },
    emptyCart: (state, _action) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
    addProductAmount: (state, action) => {
      let product = state.products.find(
        (prod) => prod.id === action.payload.id
      );
      state.products.find((prod) => prod.id === action.payload.id).quantity +=
        action.payload.quantity;

      state.quantity += action.payload.quantity;
      state.total = state.total + product.price * action.payload.quantity;
    },
    removeProductAmount: (state, action) => {
      let product = state.products.find((prod) => prod.id === action.payload);
      state.products.find((prod) => prod.id === action.payload).quantity -= 1;

      state.quantity -= 1;
      state.total = state.total - product.price;

      let productUpdated = state.products.find(
        (prod) => prod.id === action.payload
      );
      if (productUpdated.quantity < 1) {
        state.products = state.products.filter(
          (prod) => prod.id !== action.payload
        );
      }
    },
  },
});

export const { addProduct, emptyCart, addProductAmount, removeProductAmount } =
  cartSlice.actions;
export default cartSlice.reducer;
