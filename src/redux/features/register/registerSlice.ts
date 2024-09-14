import { createSlice } from "@reduxjs/toolkit";

type TAuthState = {
  name: null | string;
  email: null | string;
  password: null | string;
};
const initialState: TAuthState = {
  name: null,
  email: null,
  password: null,
};
const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    regisTer: (state, action) => {
      const { name, email, password } = action.payload;
      state.name = name;
      state.email = email;
      state.password = password;
    },
  },
});

export const { regisTer } = registerSlice.actions;

export default registerSlice.reducer;
