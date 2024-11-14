"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookClassPipe = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const book_dto_1 = require("../Dto/book.dto");
const class_validator_1 = require("class-validator");
class BookClassPipe {
    async transform(value, metadata) {
        const bookClass = (0, class_transformer_1.plainToInstance)(book_dto_1.BookDtoV2, value);
        const errors = await (0, class_validator_1.validate)(bookClass);
        if (errors.length > 0) {
            throw new common_1.BadRequestException(`Class Validation Failed======>${JSON.stringify(errors)}`);
        }
        console.log(value, typeof value);
        return value;
    }
}
exports.BookClassPipe = BookClassPipe;
//# sourceMappingURL=bookclass.pipe.js.map