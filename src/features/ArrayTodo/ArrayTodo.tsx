import { useAppSelector, useAppDispatch } from "../../app/hook";
import { removeItem, updateItem } from "./ArrayTodo.reducer";
import {
  set_img,
  set_manga,
  set_tacgia,
  set_theloai,
  set_xuatban,
  set_isEdit,
} from "../FormUi/FormTodo.rudecer";

import "./styles.css";

function ArrayTodo() {
  const Items = useAppSelector((state) => state.ToDoList.items);

  const dispatch = useAppDispatch();

  const HandlerDelete = (id: any) => {
    dispatch(removeItem(id));
  };
  const HandlerUpadte = (id: any) => {
    dispatch(set_isEdit(true));
    const EditInput = Items.filter((item) => item.id === id);

    dispatch(set_img(EditInput[0].img));
    dispatch(set_manga(EditInput[0].manga));
    dispatch(set_tacgia(EditInput[0].tacgia));
    dispatch(set_theloai(EditInput[0].theloai));
    dispatch(set_xuatban(EditInput[0].xuatban));

    dispatch(updateItem(EditInput[0]));
  };

  return (
    <div className="info-list">
      {Items.map((item, idx) => (
        <div className="warpper" key={idx}>
          <img src={item.img} alt="img1" className="img_1" />
          <p className="text-dark title-manga">Manga: {item.manga}</p>
          <p className="text-muted title-author">Tác giả: {item.tacgia}</p>
          <div className="title-tl">
            <p className="tl-t">TheLoai: </p>
            <div className="tl">
              <p>{item.theloai}</p>
            </div>
          </div>
          <p className="text-dark title-sx">Năm: {item.xuatban}</p>
          <div className="btn-viewlist">
            <button
              type="button"
              className="btn btn-info btn-o"
              onClick={() => HandlerUpadte(item.id)}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-danger btn-o"
              onClick={() => HandlerDelete(item.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ArrayTodo;
