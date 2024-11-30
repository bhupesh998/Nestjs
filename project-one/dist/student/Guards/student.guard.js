"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentGuard = void 0;
const common_1 = require("@nestjs/common");
let StudentGuard = class StudentGuard {
    constructor() {
        this.key = 'ihaveacess';
    }
    canActivate(context) {
        console.log("request paiing through guard");
        const ctx = context.switchToHttp();
        const request = ctx.getRequest();
        if (request.header("key") && request.header("key") == this.key) {
            return true;
        }
        else {
            return false;
        }
    }
};
exports.StudentGuard = StudentGuard;
exports.StudentGuard = StudentGuard = __decorate([
    (0, common_1.Injectable)()
], StudentGuard);
//# sourceMappingURL=student.guard.js.map