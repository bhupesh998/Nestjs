import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
export declare class BookClassPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): Promise<any>;
}
