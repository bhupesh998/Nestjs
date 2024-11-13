"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoiValidationPipe = void 0;
const common_1 = require("@nestjs/common");
class JoiValidationPipe {
    constructor(schema) {
        this.schema = schema;
    }
    transform(value, metadata) {
        const { error } = this.schema.validate(value);
        if (error) {
            throw new common_1.BadRequestException("Validation Failed");
        }
        return value;
    }
}
exports.JoiValidationPipe = JoiValidationPipe;
//# sourceMappingURL=index.js.map