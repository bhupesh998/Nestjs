import { Controller, Get, Post, UseInterceptors , Req, Res} from '@nestjs/common';
import { AppService } from './app.service';
import { AppInterceptor } from './app.interceptor';
import { Request, Response} from "express"

@Controller("app")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  @UseInterceptors(AppInterceptor) // this can be applied at global level or on a controller level as well
  setHello(): any {
   return  "This is the response"
    
  }
}

