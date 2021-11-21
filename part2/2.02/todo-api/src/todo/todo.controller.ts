import { Controller, Get, Post, Query } from "@nestjs/common";
import { TodoService } from "./todo.service";

@Controller("/todos")
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getTodos(): string[] {
    return this.todoService.getTodos();
  }

  @Post()
  createTodo(@Query("todo") todo: string) {
    this.todoService.saveTodo(todo);
  }
}
