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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const user_dto_1 = require("./dto/user.dto");
const common_2 = require("@nestjs/common");
const common_3 = require("@nestjs/common");
const filter_1 = require("./filter");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    getAllUser() {
        return this.userService.getAllUsers();
    }
    getUser(email, res) {
        console.log(email);
        try {
            let userData = this.userService.getUser(email.email);
            res.status(200).send({
                "status": "Success",
                "result": userData
            });
        }
        catch (err) {
            throw new common_1.BadRequestException('test');
        }
    }
    async addUser(user) {
        return this.userService.addUser(user);
    }
    deleteUser(params) {
        return this.userService.deleteUser(params.email);
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], UserController.prototype, "getAllUser", null);
__decorate([
    (0, common_1.Get)('/:email'),
    (0, common_2.UsePipes)(new common_3.ValidationPipe()),
    (0, common_1.UseFilters)(new filter_1.HttpExceptionFilter),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.userParamsDto, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getUser", null);
__decorate([
    (0, common_1.HttpCode)(201),
    (0, common_1.Header)('cache-control', 'none'),
    (0, common_1.Post)(),
    (0, common_2.UsePipes)(new common_3.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "addUser", null);
__decorate([
    (0, common_1.Delete)('/:email'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.userParamsDto]),
    __metadata("design:returntype", Array)
], UserController.prototype, "deleteUser", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('/users'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map