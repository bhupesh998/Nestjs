import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { BookDto } from "./Dto/book.dto";
import { BookPipe } from "./pipe/book.pipe";


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



}