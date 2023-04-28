import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Item {
  id: number;
  img: string;
  manga: string;
  tacgia: string;
  theloai: [string];
  xuatban: number;
}

interface State {
  items: Item[];
}
const initialState: State = {
  items: [
    {
      id: 1,
      img: "https://miraihuman.com/storage/miraiuploads/TOP%2010%20B%E1%BB%98%20MANGA%20HAY%20NH%E1%BA%A4T%20M%E1%BB%8CI%20TH%E1%BB%9CI%20%C4%90%E1%BA%A0I/%C4%90%E1%BA%A3o%20h%E1%BA%A3i%20t%E1%BA%B7c%20-%20Top%2010%20b%E1%BB%99%20Manga%20hay%20nh%E1%BA%A5t%20m%E1%BB%8Di%20th%E1%BB%9Di%20%C4%91%E1%BA%A1i.png",
      manga: "One Piece",
      tacgia: "Oda Eiichiro",
      theloai: ["Hành động, Phiêu lưu, Viễn tưởng, Hài hước"],
      xuatban: 1999,
    },
    {
      id: 2,
      img: "https://miraihuman.com/storage/miraiuploads/TOP%2010%20B%E1%BB%98%20MANGA%20HAY%20NH%E1%BA%A4T%20M%E1%BB%8CI%20TH%E1%BB%9CI%20%C4%90%E1%BA%A0I/Naruto%20Top%2010%20b%E1%BB%99%20Manga%20hay%20nh%E1%BA%A5t%20m%E1%BB%8Di%20th%E1%BB%9Di%20%C4%91%E1%BA%A1i.png",
      manga: "Naruto",
      tacgia: "Masashi Kishimoto",
      theloai: ["Hành động, Phiêu lưu, Viễn tưởng, Hài hước"],
      xuatban: 1999,
    },
    {
      id: 3,
      img: "https://miraihuman.com/storage/miraiuploads/TOP%2010%20B%E1%BB%98%20MANGA%20HAY%20NH%E1%BA%A4T%20M%E1%BB%8CI%20TH%E1%BB%9CI%20%C4%90%E1%BA%A0I/7%20vi%C3%AAn%20ng%E1%BB%8Dc%20r%E1%BB%93ng%20-%20Top%2010%20b%E1%BB%99%20Manga%20hay%20nh%E1%BA%A5t%20m%E1%BB%8Di%20th%E1%BB%9Di%20%C4%91%E1%BA%A1i.png",
      manga: "Dragon ball",
      tacgia: "Akira Toriyama",
      theloai: ["Hành động, Phiêu lưu, Viễn tưởng, Hài hước"],
      xuatban: 1970,
    },
  ],
};

const todoLists = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addItem: (state, actions) => {
      state.items.push(actions.payload);
    },

    updateItem: (state, action) => {
      const { id } = action.payload;
      console.log(id);

      state.items = state.items.map((item) => {
        return item.id === id ? action.payload : item;
      });
    },

    removeItem: (state, actions: PayloadAction<number>) => {
      const id = actions.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});

const { reducer, actions } = todoLists;

export const { addItem, updateItem, removeItem } = actions;
export default reducer;
