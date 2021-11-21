import { Controller, Get, Header, Response } from "@nestjs/common";
import { ImageService } from "./image.service";

@Controller("/image")
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Get()
  @Header("content-type", "image/jpeg")
  async getImage(@Response() response) {
    const image = await this.imageService.getImage();
    image.pipe(response);
  }
}
