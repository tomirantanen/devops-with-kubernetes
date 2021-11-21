import { Injectable } from "@nestjs/common";
import { createReadStream } from "fs";
import { stat, open } from "fs/promises";
import { isSameDay } from "date-fns";
import { HttpService } from "@nestjs/axios";
import { Observable } from "rxjs";
import { AxiosResponse } from "axios";

const imagePath = "/app/images/image.jpg";

@Injectable()
export class ImageService {
  constructor(private httpService: HttpService) {}

  async getImage() {
    const isImageTooOld = await this.isCurrentImageTooOld();
    if (isImageTooOld) {
      await this.loadNewImage();
    }
    return createReadStream(imagePath);
  }

  async loadNewImage() {
    const fileHandle = await open(imagePath, "w");

    this.loadPicsumImage().subscribe(response =>
      response.data.pipe(fileHandle.createWriteStream()),
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

  /**
   * Get random image from Lorem Picsum.
   */
  loadPicsumImage(): Observable<AxiosResponse<any, any>> {
    return this.httpService.get("https://picsum.photos/400", {
      responseType: "stream",
    });
  }
}
