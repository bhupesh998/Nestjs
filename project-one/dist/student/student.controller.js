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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
const common_1 = require("@nestjs/common");
const student_guard_1 = require("./Guards/student.guard");
let StudentController = class StudentController {
    findAll() {
        return "this will return all students";
    }
    add() {
        return "this will add student";
    }
};
exports.StudentController = StudentController;
__decorate([
    (0, common_1.Get)('/findall'),
    (0, common_1.UseGuards)(new student_guard_1.StudentGuard()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], StudentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/add'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], StudentController.prototype, "add", null);
exports.StudentController = StudentController = __decorate([
    (0, common_1.Controller)("student")
], StudentController);
//# sourceMappingURL=student.controller.js.map