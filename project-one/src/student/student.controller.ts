import { Controller, Get, Post, UseGuards } from "@nestjs/common";
import { StudentGuard } from "./Guards/student.guard";



@Controller("student")
export class StudentController{

    @Get('/findall')
    @UseGuards(new StudentGuard()) //can be used at controller level as well so all methods will enforce
    findAll(): string{
        return "this will return all students"
    }
    
    @Post('/add')
    add(): string{
        return "this will add student"
    }

    



}