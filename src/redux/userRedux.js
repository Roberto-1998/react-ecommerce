import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
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
  },
});

export const { loginSuccess, loginError, logout } = userSlice.actions;
export default userSlice.reducer;
