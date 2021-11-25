import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from "@nestjs/common";

const maxTodoLength = 140;

@Injectable()
export class TodoValidationPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    if (value.length > maxTodoLength) {
      throw new BadRequestException(
        `Todo is too long. Max length ${maxTodoLength}.`,
      );
    }
    return value;
  }
}
