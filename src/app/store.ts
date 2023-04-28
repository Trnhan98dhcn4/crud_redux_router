import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../features/ArrayTodo/ArrayTodo.reducer";
import FormReducer from "../features/FormUi/FormTodo.rudecer";

const rootReducer = {
  ToDoList: TodoReducer,
  FormUi: FormReducer,
};

const store = configureStore({
  reducer: rootReducer,
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
