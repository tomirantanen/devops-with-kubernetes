import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { Observable } from "rxjs";
import { AxiosResponse } from "axios";

@Injectable()
export class PicsumService {
  constructor(private httpService: HttpService) {}

  /**
   * Get random image from Lorem Picsum.
   */
  getImage(): Observable<AxiosResponse<any, any>> {
    return this.httpService.get("https://picsum.photos/400", {
      responseType: "stream",
    });
  }
}
