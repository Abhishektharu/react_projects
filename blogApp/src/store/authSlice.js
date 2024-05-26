import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  //we don't have user data initially (assume user is logout);
  userData: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userData = action.payload.userData;
      //to login set the status (login ) to true;
      state.status = true;
    },
    logout: (state) => {
      (state.status = false), (state.userData = null);
    },
  },
});

// export actions (login, logout)
export const {login, logout} = authSlice.actions;
export default authSlice.reducer;
