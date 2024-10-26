import { Controller, Get , Post, Body, Param, Delete, HttpCode, Header, Res, UseFilters, BadRequestException} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interface/user';
import { UserDto, userParamsDto } from './dto/user.dto';
import { UsePipes } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { HttpExceptionFilter } from './filter';


@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUser(): User[] {
    return this.userService.getAllUsers();
  }

  @Get('/:email')
  @UsePipes(new ValidationPipe())
  @UseFilters(new HttpExceptionFilter)
  getUser(@Param() email: userParamsDto, @Res() res:Response){
    console.log(email)
    try{
      let userData = this.userService.getUser(email.email)
        res.status(200).send({
          "status": "Success",
          "result": userData
        })
    }catch(err){
      throw new BadRequestException('test')
    }
    
  }

  @HttpCode(201)
  @Header('cache-control','none')
  @Post() 
  @UsePipes(new ValidationPipe()) //it will enforce validation on this request
  async addUser(@Body() user:UserDto) : Promise<User> {
    return this.userService.addUser(user)
  }

  @Delete('/:email')
  deleteUser(@Param() params: userParamsDto): User[]{
    return this.userService.deleteUser(params.email)
  } 
  
}
