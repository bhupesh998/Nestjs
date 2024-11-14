"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookException = void 0;
const common_1 = require("@nestjs/common");
class BookException extends common_1.HttpException {
    constructor() {
        super('Custone Book Exception', common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.BookException = BookException;
//# sourceMappingURL=book.exception.js.map