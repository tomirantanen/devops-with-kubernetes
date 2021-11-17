import { Module } from "@nestjs/common";
import { PicsumModule } from "src/picsum/picsum.module";
import { ImageLoaderService } from "./image-loader.service";

@Module({
  imports: [PicsumModule],
  providers: [ImageLoaderService],
  exports: [ImageLoaderService],
})
export class ImageLoaderModule {}
