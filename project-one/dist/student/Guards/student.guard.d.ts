import { CanActivate, ExecutionContext } from "@nestjs/common";
export declare class StudentGuard implements CanActivate {
    key: string;
    canActivate(context: ExecutionContext): boolean;
}
