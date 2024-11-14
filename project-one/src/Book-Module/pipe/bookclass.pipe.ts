import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { BookDto, BookDtoV2 } from "../Dto/book.dto";
import { validate } from "class-validator";


export class BookClassPipe implements PipeTransform{
  async transform(value: any, metadata: ArgumentMetadata) : Promise<any>{
      const bookClass = plainToInstance(BookDtoV2, value)

      const errors = await validate(bookClass)

      if(errors.length > 0){
        throw new BadRequestException(`Class Validation Failed======>${JSON.stringify(errors)}`)
      }
      console.log(value, typeof value)
      return value

    }
}