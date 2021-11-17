import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { PicsumService } from "./picsum.service";

@Module({
  imports: [HttpModule],
  providers: [PicsumService],
  exports: [PicsumService],
})
export class PicsumModule {}
