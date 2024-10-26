import { User } from './interface/user';
export declare class UserService {
    users: User[];
    getAllUsers(): User[];
    getUser(email: string): User;
    addUser(user: User): Promise<User>;
    deleteUser(email: string): User[];
}
