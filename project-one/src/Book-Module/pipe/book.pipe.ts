import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";


export class BookPipe implements PipeTransform{
    transform(value: any, metadata: ArgumentMetadata) {
        console.log(value, typeof value)
        if(value.id ==1 ) return value
        else throw new BadRequestException("Validation Failed")
    }
}