import { BookDto, BookDtoV2 } from "./Dto/book.dto";
export declare class BookController {
    findBookById(id: number): string;
    addBook(book: BookDto): string;
    addBookClassV2(book: BookDtoV2): string;
    addBookClassV3(book: BookDtoV2): string;
}