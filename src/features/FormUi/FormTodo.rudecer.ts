import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 0,
  img: "",
  manga: "",
  tacgia: "",
  theloai: [],
  xuatban: 0,
  isEdit: false,
};

const EditForm = createSlice({
  name: "Form-list",
  initialState,
  reducers: {
    set_img: (state, action) => {
      state.img = action.payload;
    },
    set_manga: (state, action) => {
      state.manga = action.payload;
    },
    set_tacgia: (state, action) => {
      state.tacgia = action.payload;
    },
    set_theloai: (state, action) => {
      state.theloai = action.payload;
    },
    set_xuatban: (state, action) => {
      state.xuatban = action.payload;
    },
    set_isEdit: (state, action) => {
      state.isEdit = action.payload;
    },
  },
});

const { reducer, actions } = EditForm;
export const {
  set_img,
  set_manga,
  set_tacgia,
  set_theloai,
  set_xuatban,
  set_isEdit,
} = actions;
export default reducer;
