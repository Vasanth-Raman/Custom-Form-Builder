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
    setFormData: (state, action) => {
      const { formName, theme, folderId } = action.payload;
      state.formName = formName;
      state.theme = theme;
      state.folderId = folderId;
    },
  },
});

export const { setFormName, setTheme, setFolderId, setFormData } =
  formFieldSlice.actions;

export default formFieldSlice.reducer;
