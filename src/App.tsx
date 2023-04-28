import FormUi from "./features/FormUi/FormUI";
import ItemTodo from "./features/ItemTodo/ItemTodo";

import "./styles.css";

function App() {
  return (
    <div className="container-fluid wapper-ctn">
      <h2>CRUD - REDUX - USE HOOK FORM - BOOTSTRAP 5</h2>
      <div className="row">
        <FormUi />
        <ItemTodo />
      </div>
    </div>
  );
}

export default App;
