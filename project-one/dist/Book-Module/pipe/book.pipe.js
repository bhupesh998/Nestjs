"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookPipe = void 0;
const common_1 = require("@nestjs/common");
class BookPipe {
    transform(value, metadata) {
        console.log(value, typeof value);
        if (value.id == 1)
            return value;
        else
            throw new common_1.BadRequestException("Validation Failed");
    }
}
exports.BookPipe = BookPipe;
//# sourceMappingURL=book.pipe.js.map