import { UserService } from './user.service';
import { User } from './interface/user';
import { UserDto, userParamsDto } from './dto/user.dto';
import { Response } from 'express';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAllUser(): User[];
    getUser(email: userParamsDto, res: Response): void;
    addUser(user: UserDto): Promise<User>;
    deleteUser(params: userParamsDto): User[];
}
