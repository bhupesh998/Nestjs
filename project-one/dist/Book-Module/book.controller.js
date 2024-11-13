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
let BookController = class BookController {
    findBookById(id) {
        console.log(id, typeof id);
        return "this will return books by id";
    }
    addBook(book) {
        return "this will add a book";
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
    (0, common_1.Post)('/add'),
    __param(0, (0, common_1.Body)(new book_pipe_1.BookPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [book_dto_1.BookDto]),
    __metadata("design:returntype", String)
], BookController.prototype, "addBook", null);
exports.BookController = BookController = __decorate([
    (0, common_1.Controller)("books")
], BookController);
//# sourceMappingURL=book.controller.js.map