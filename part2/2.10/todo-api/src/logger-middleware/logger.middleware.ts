import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(request: Request, response: Response, next: NextFunction) {
    response.on("finish", () =>
      console.log(
        `${request.method} ${request.path} ${response.statusCode} ${request.headers["user-agent"]}`,
      ),
    );
    next();
  }
}
