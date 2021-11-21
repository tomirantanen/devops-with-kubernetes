import axios from "axios";

export const getTodos = async (): Promise<string[]> => {
  const response = await axios.get("/api/todos");
  return response.data;
};

export const createTodo = async (todo: string) => {
  await axios.post("/api/todos", null, { params: { todo } });
};
