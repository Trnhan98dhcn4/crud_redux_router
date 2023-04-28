import { useForm } from "react-hook-form";
import { useRef } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hook";
import {
  set_img,
  set_manga,
  set_tacgia,
  set_theloai,
  set_xuatban,
  set_isEdit,
} from "./FormTodo.rudecer";

import { addItem, updateItem } from "../ArrayTodo/ArrayTodo.reducer";
import "./styles.css";

function FormUi() {
  const form = useForm();
  const { register, handleSubmit } = form;

  const formInput = useAppSelector((state) => state.FormUi);
  const ListData = useAppSelector((state) => state.ToDoList.items);

  const dispatch = useAppDispatch();

  const { id, img, manga, tacgia, theloai, xuatban, isEdit } = formInput;

  const submitFormAdd = (event: any) => {
    if (!isEdit) {
      console.log("add list: false", isEdit);
      dispatch(addItem({ id, img, manga, tacgia, theloai, xuatban }));
      dispatch(set_img(""));
      dispatch(set_manga(""));
      dispatch(set_tacgia(""));
      dispatch(set_xuatban(""));
    } else {
      dispatch(updateItem(ListData));
      dispatch(set_isEdit(false));
    }
  };

  return (
    <div className="col-sm-4 wapper-form">
      <div className="title-Form">
        <form onSubmit={handleSubmit(submitFormAdd)}>
          <div className="mb-3 mt-3">
            <label htmlFor="img" className="form-label">
              Address Image:{" "}
            </label>
            <input
              type="text"
              id="img"
              {...register("img")}
              onChange={(e) => dispatch(set_img(e.target.value))}
              className="form-control"
              placeholder="Address Image"
              value={img}
            />
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="manga" className="form-label">
              Manga:{" "}
            </label>
            <input
              type="text"
              id="manga"
              {...register("manga")}
              onChange={(e) => dispatch(set_manga(e.target.value))}
              className="form-control"
              placeholder="Enter Manga"
              value={manga}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tacgia" className="form-label">
              Tac gia:
            </label>
            <input
              type="text"
              id="tacgia"
              {...register("tacgia")}
              onChange={(e) => dispatch(set_tacgia(e.target.value))}
              className="form-control"
              placeholder="Enter Author"
              value={tacgia}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="theloai" className="form-label">
              The Loai:
            </label>
            <div className="form-check">
              <input
                type="checkbox"
                id="check1"
                {...register("option1")}
                onChange={(e) => dispatch(set_theloai(e.target.value))}
                className="form-check-input"
                value={theloai}
              />
              <label className="form-check-label" htmlFor="check1">
                Hành Động
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                id="check2"
                {...register("option2")}
                onChange={(e) => dispatch(set_theloai(e.target.value))}
                className="form-check-input"
                value={theloai}
              />
              <label className="form-check-label" htmlFor="check2">
                Phiêu lưu
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                id="check3"
                {...register("option3")}
                onChange={(e) => dispatch(set_theloai(e.target.value))}
                className="form-check-input"
                value={theloai}
              />
              <label className="form-check-label" htmlFor="check3">
                Hài hước
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                id="check4"
                {...register("option4")}
                onChange={(e) => dispatch(set_theloai(e.target.value))}
                className="form-check-input"
                value={theloai}
              />
              <label className="form-check-label" htmlFor="check4">
                Viễn tưởng
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="tacgia" className="form-label">
                Năm xuất bản:
              </label>
              <input
                type="number"
                id="xuatban"
                {...register("xuatban")}
                onChange={(e) => dispatch(set_xuatban(e.target.value))}
                className="form-control"
                placeholder="Enter Year ?"
                value={xuatban}
              />
            </div>
          </div>
          {isEdit === false ? (
            <button type="submit" className="btn btn-primary">
              Xác Nhận
            </button>
          ) : (
            <button type="submit" className="btn btn-info">
              Cập Nhập
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default FormUi;
