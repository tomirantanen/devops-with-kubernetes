import { MiddlewareConsumer, Module } from "@nestjs/common";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ImageLoaderMiddleware } from "./middleware/image-loader.middleware";
import { ImageLoaderModule } from "./middleware/image-loader.module";
import { PicsumModule } from "./picsum/picsum.module";

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "static"),
    }),
    PicsumModule,
    ImageLoaderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ImageLoaderMiddleware).forRoutes("*");
  }
}
