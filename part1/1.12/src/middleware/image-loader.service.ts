import { Injectable } from "@nestjs/common";
import { PicsumService } from "src/picsum/picsum.service";
import { createWriteStream } from "fs";
import { stat } from "fs/promises";
import { isSameDay } from "date-fns";

const imagePath = "/app/static/images/image.jpg";

@Injectable()
export class ImageLoaderService {
  constructor(private picsumService: PicsumService) {}

  loadNewImage() {
    this.picsumService
      .getImage()
      .subscribe((response) =>
        response.data.pipe(createWriteStream(imagePath))
      );
  }

  async isCurrentImageTooOld() {
    try {
      const now = new Date();
      const imageStat = await stat(imagePath);
      const imageModifiedTime = imageStat.mtime;

      return !isSameDay(now, imageModifiedTime);
    } catch (error) {
      console.error(error);
      return true;
    }
  }
}
