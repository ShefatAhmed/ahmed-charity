import { createSlice } from "@reduxjs/toolkit";

type TDonationState = {
  image: null | string;
  category: null | string;
  title: null | string;
  amount: null | number;
  description: null | string;
};
const initialState: TDonationState = {
  image: null,
  category: null,
  title: null,
  amount: null,
  description: null,
};
const donationSlice = createSlice({
  name: "donation",
  initialState,
  reducers: {
    createDonation: (state, action) => {
      const { image, category, title, amount, description } = action.payload;
      state.image = image;
      state.category = category;
      state.title = title;
      state.amount = amount;
      state.description = description;
    },
    deleteDonation: (state) => {
      state.image = null;
      state.category = null;
      state.title = null;
      state.amount = null;
      state.description = null;
    },
  },
});

export const { createDonation, deleteDonation } = donationSlice.actions;

export default donationSlice.reducer;
