export type Todo = {
  id: number;
  todo: string;
};

export const insertTodoQuery = "INSERT INTO todos(todo) VALUES ($1);";
export const getAllTodosQuery = "SELECT id, todo FROM todos;";
export const createTodosTable = `
  CREATE TABLE IF NOT EXISTS todos (
    id SERIAL PRIMARY KEY,
    todo VARCHAR(2000),
    creation_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );`;
