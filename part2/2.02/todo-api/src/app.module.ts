import { Module } from "@nestjs/common";
import { ImageModule } from "./image/image.module";
import { TodoModule } from "./todo/todo.module";

@Module({
  imports: [ImageModule, TodoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
