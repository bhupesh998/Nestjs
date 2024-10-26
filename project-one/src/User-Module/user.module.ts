import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { LoggerMiddleware } from './middleware';


@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})

export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes({ path: 'users', method: RequestMethod.GET})
    // we can also use exclude to exclude routes and particular methods
    // consumer.apply(LoggerMiddleware, Cors(), helmet()).forRoutes(UserController) //this middleware applys to all routes in user controller and cors and helmet are also the applied middleware
  }
}
