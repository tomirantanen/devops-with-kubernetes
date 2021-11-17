import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { ImageLoaderService } from "./image-loader.service";

@Injectable()
export class ImageLoaderMiddleware implements NestMiddleware {
  constructor(private imageLoaderService: ImageLoaderService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const isImageTooOld = await this.imageLoaderService.isCurrentImageTooOld();
    if (isImageTooOld) {
      this.imageLoaderService.loadNewImage();
    }

    next();
  }
}
