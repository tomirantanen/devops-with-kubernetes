import { Injectable } from "@nestjs/common";

@Injectable()
export class TodoService {
  private todos = [];

  getTodos(): string[] {
    return this.todos;
  }

  saveTodo(todo: string) {
    this.todos.push(todo);
  }
}
