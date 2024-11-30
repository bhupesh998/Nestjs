import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, map } from "rxjs";
import { Request, Response} from "express"

@Injectable()
export class AppInterceptor implements NestInterceptor{

    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        const ctx = context.switchToHttp()
        const request = ctx.getRequest<Request>()
        const response = ctx.getResponse<Response>()

        request.body.name = "Batman"

        return next.handle().pipe(map((data)=>{
            data = "from interceptor"
            return data
        }))
    
    }

}