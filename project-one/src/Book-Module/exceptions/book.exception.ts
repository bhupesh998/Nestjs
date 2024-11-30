import { HttpException, HttpStatus } from "@nestjs/common";

export class BookException extends HttpException{
    constructor(){
        super('Custone Book Exception', HttpStatus.BAD_REQUEST)
    }
}