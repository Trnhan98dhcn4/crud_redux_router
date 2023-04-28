import ArrayTodo from "../ArrayTodo/ArrayTodo";
import "./styles.css";

function ItemTodo() {
  return (
    <div className="col-sm-8 wapper-todo">
      <div className="title-Item-todo">
        <h3>Item todo</h3>
      </div>
      <div>
        <ArrayTodo />
      </div>
    </div>
  );
}

export default ItemTodo;
