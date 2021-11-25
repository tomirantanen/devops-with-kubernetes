import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database/database.module";
import { ImageModule } from "./image/image.module";
import { TodoModule } from "./todo/todo.module";

@Module({
  imports: [ImageModule, TodoModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
