import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type TUser = {
  email: string;
  name: string;
  amount: number;
  iat: number;
  exp: number;
};

type TToken = {
  token: string;
};

type TAuthState = {
  user: null | TUser;
  token: null | TToken;
};
const initialState: TAuthState = {
  user: null,
  token: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logtout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logtout } = authSlice.actions;

export default authSlice.reducer;

export const useCurrentToken = (state: RootState) => state.auth.token;
export const selectCurrentUser = (state: RootState) => state.auth.user;
