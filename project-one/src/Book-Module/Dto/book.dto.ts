import {  IsNumber, IsString } from "class-validator";


export class BookDto{
    id: number;
    name:string;
}

export class BookDtoV2{
    @IsNumber()
    id: number;

    @IsString()
    name:string;
}