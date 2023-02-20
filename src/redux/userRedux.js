import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: "",
  allUsers: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.currentUser = { ...action.payload, orders: [] };
      state.error = "";
    },
    loginError: (state, action) => {
      state.currentUser = null;
      state.error = action.payload;
    },
    logout: (state) => {
      state.currentUser = initialState.currentUser;
      state.error = initialState.error;
    },
    register: (state, action) => {
      state.currentUser = { ...action.payload, orders: [] };
      state.error = "";
      state.allUsers = [
        ...state.allUsers,
        { id: state.allUsers.length + 1, ...action.payload },
      ];
    },
    deleteAccount: (state, action) => {
      let users = state.allUsers.filter(
        (user) => user.username !== action.payload
      );
      state.allUsers = [...users];
      state.currentUser = null;
    },
    addOrder: (state, action) => {
      state.currentUser.orders = [...state.currentUser.orders, action.payload];
    },
  },
});

export const {
  loginSuccess,
  loginError,
  logout,
  register,
  deleteAccount,
  addOrder,
} = userSlice.actions;
export default userSlice.reducer;
