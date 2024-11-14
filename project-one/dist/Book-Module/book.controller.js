"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const common_1 = require("@nestjs/common");
const book_dto_1 = require("./Dto/book.dto");
const book_pipe_1 = require("./pipe/book.pipe");
const bookclass_pipe_1 = require("./pipe/bookclass.pipe");
const book_exception_1 = require("./exceptions/book.exception");
const book_exception_filter_1 = require("./exceptions/book.exception.filter");
let BookController = class BookController {
    findBookById(id) {
        console.log(id, typeof id);
        return "this will return books by id";
    }
    getBook() {
        throw new book_exception_1.BookException();
        return "book exception";
    }
    getBookV2() {
        throw new common_1.BadRequestException();
        return "book exception";
    }
    addBook(book) {
        return "this will add a book";
    }
    addBookClassV2(book) {
        return "this will add a book via class pipe";
    }
    addBookClassV3(book) {
        return "this will add a book via class pipe";
    }
};
exports.BookController = BookController;
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", String)
], BookController.prototype, "findBookById", null);
__decorate([
    (0, common_1.Put)('/fault'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], BookController.prototype, "getBook", null);
__decorate([
    (0, common_1.Put)('/fault/v2'),
    (0, common_1.UseFilters)(book_exception_filter_1.BookExceptionFilter),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], BookController.prototype, "getBookV2", null);
__decorate([
    (0, common_1.Post)('/add'),
    __param(0, (0, common_1.Body)(new book_pipe_1.BookPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [book_dto_1.BookDto]),
    __metadata("design:returntype", String)
], BookController.prototype, "addBook", null);
__decorate([
    (0, common_1.Post)('/add/v2'),
    __param(0, (0, common_1.Body)(new bookclass_pipe_1.BookClassPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [book_dto_1.BookDtoV2]),
    __metadata("design:returntype", String)
], BookController.prototype, "addBookClassV2", null);
__decorate([
    (0, common_1.Post)('/add/v3'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [book_dto_1.BookDtoV2]),
    __metadata("design:returntype", String)
], BookController.prototype, "addBookClassV3", null);
exports.BookController = BookController = __decorate([
    (0, common_1.Controller)("books")
], BookController);
//# sourceMappingURL=book.controller.js.map