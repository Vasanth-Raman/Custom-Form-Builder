import { createSlice } from "@reduxjs/toolkit";

const formErrorSlice = createSlice({
  name: "formError",
  initialState: "",
  reducers: {
    addError: (state, action) => {
      return action.payload;
    },
    removeError: () => {
      return "";
    },
  },
});

export const { addError, removeError } = formErrorSlice.actions;

export default formErrorSlice.reducer;
