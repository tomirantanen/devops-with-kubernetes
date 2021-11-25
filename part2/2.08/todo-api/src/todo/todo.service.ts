import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { Client } from "pg";
import {
  createTodosTable,
  getAllTodosQuery,
  insertTodoQuery,
  Todo,
} from "./todo.sql";

@Injectable()
export class TodoService implements OnModuleInit {
  constructor(@Inject("postgres") private client: Client) {}

  async onModuleInit() {
    try {
      await this.client.query(createTodosTable);
    } catch (error) {
      console.error(error);
    }
  }

  async getTodos(): Promise<Todo[]> {
    try {
      const result = await this.client.query<Todo>(getAllTodosQuery);
      return result.rows;
    } catch (error) {
      console.error(error);
    }
  }

  async saveTodo(todo: string): Promise<void> {
    const values = [todo];
    await this.client.query(insertTodoQuery, values);
  }
}
