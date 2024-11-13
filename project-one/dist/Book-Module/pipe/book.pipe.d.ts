import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
export declare class BookPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
