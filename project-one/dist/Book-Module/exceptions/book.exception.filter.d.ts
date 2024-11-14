import { ArgumentsHost, ExceptionFilter } from "@nestjs/common";
export declare class BookExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost): void;
}
