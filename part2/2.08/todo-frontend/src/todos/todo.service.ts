import axios from "axios";

export type Todo = {
  id: number;
  todo: string;
};

export const getTodos = async (): Promise<Todo[]> => {
  const response = await axios.get("/api/todos");
  return response.data;
};

export const createTodo = async (todo: string) => {
  await axios.post("/api/todos", null, { params: { todo } });
};
