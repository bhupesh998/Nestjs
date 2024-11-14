import { Body, Controller, Get, Param, ParseIntPipe, Post, ValidationPipe } from "@nestjs/common";
import { BookDto, BookDtoV2 } from "./Dto/book.dto";
import { BookPipe } from "./pipe/book.pipe";
import { BookClassPipe } from "./pipe/bookclass.pipe";


@Controller("books")
export class BookController{

    @Get('/:id')
    findBookById(@Param("id", ParseIntPipe) id: number): string{
        console.log(id, typeof id)
        return "this will return books by id"
    }

    @Post('/add')
    addBook(@Body(new BookPipe()) book: BookDto): string{
        return "this will add a book"
    }

    @Post('/add/v2')
    addBookClassV2(@Body(new BookClassPipe()) book: BookDtoV2): string{
        return "this will add a book via class pipe"
    }

    //builtin nestjs pipe
    @Post('/add/v3')
    addBookClassV3(@Body(new ValidationPipe()) book: BookDtoV2): string{
        return "this will add a book via class pipe"
    }



}