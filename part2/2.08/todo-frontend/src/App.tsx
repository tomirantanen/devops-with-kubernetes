import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { loadImage } from "./image/image.service";
import { createTodo, getTodos, Todo } from "./todos/todo.service";

export const App = () => {
  const [image, setImage] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    async function getImage() {
      const image = await loadImage();
      setImage(image);
    }
    getImage();
  }, []);

  useEffect(() => {
    async function updateTodos() {
      const todos = await getTodos();
      setTodos(todos);
    }
    updateTodos();
  }, []);

  const handleTodoInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoInput(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await createTodo(todoInput);
    setTodoInput("");

    const todos = await getTodos();
    setTodos(todos);
  };

  return (
    <div className="App">
      {image && <img alt="" src={`data:image/jpeg;base64,${image}`} />}
      <form onSubmit={handleSubmit} action="">
        <input
          name="todoInput"
          value={todoInput}
          onChange={handleTodoInputChange}
          maxLength={140}
        />
        <input type="submit" value="Create TODO" />
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.todo}</li>
        ))}
      </ul>
    </div>
  );
};
