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
    },
    loginError: (state, action) => {
      state.currentUser = null;
      state.error = action.payload;
    },
  },
});

export const { loginSuccess, loginError } = userSlice.actions;
export default userSlice.reducer;
