import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';


@Injectable()
export class LoggerMiddleware implements NestMiddleware {

    use(req: any, res: any, next: (error?: Error | any) => void) {
        console.log("Request Path", req?.path)
        next()
    }
}