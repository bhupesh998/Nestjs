import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { Request, Response } from 'express'


@Catch(HttpException) //in catch we are specifying what kind of exception we are catching
export class BookExceptionFilter implements ExceptionFilter{

    catch(exception: any, host: ArgumentsHost) {

        const context=host.switchToHttp()
        const response=context.getResponse<Response>()
        const request=context.getRequest<Request>()
        const status=exception.getStatus()

        response.status(status).json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            url : request.url,
            host: request.hostname

        })

        
    }
}