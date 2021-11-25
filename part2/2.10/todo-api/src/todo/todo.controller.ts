import { Controller, Get, Post, Query } from "@nestjs/common";
import { TodoService } from "./todo.service";
import { Todo } from "./todo.sql";
import { TodoValidationPipe } from "../validation/todo.validation.pipe";

@Controller("/todos")
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getTodos(): Promise<Todo[]> {
    return this.todoService.getTodos();
  }

  @Post()
  createTodo(@Query("todo", TodoValidationPipe) todo: string): Promise<void> {
    return this.todoService.saveTodo(todo);
  }
}
