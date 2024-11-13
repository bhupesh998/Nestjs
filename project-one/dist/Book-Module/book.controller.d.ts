import { BookDto } from "./Dto/book.dto";
export declare class BookController {
    findBookById(id: number): string;
    addBook(book: BookDto): string;
}
