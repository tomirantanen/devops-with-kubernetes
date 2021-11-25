import { MiddlewareConsumer, Module } from "@nestjs/common";
import { TodoController } from "./todo/todo.controller";
import { DatabaseModule } from "./database/database.module";
import { ImageModule } from "./image/image.module";
import { LoggerMiddleware } from "./logger-middleware/logger.middleware";
import { TodoModule } from "./todo/todo.module";

@Module({
  imports: [ImageModule, TodoModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(TodoController);
  }
}
