import { Controller, Get, Post, Query } from "@nestjs/common";
import { TodoService } from "./todo.service";
import { Todo } from "./todo.sql";

@Controller("/todos")
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getTodos(): Promise<Todo[]> {
    return this.todoService.getTodos();
  }

  @Post()
  createTodo(@Query("todo") todo: string): Promise<void> {
    return this.todoService.saveTodo(todo);
  }
}
