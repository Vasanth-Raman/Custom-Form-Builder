import { createSlice } from "@reduxjs/toolkit";

const formFieldSlice = createSlice({
  name: "formField",
  initialState: {
    formName: "",
    theme: "#FFFFFF",
    folderId: null,
  },
  reducers: {
    setFormName: (state, action) => {
      state.formName = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setFolderId: (state, action) => {
      state.folderId = action.payload;
    },
  },
});

export const { setFormName, setTheme, setFolderId } = formFieldSlice.actions;

export default formFieldSlice.reducer;
