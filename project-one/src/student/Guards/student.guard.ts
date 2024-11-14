import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class StudentGuard implements CanActivate{

    public key:string = 'ihaveacess'

    canActivate(context: ExecutionContext): boolean {
        console.log("request paiing through guard");
        const ctx = context.switchToHttp()
        const request = ctx.getRequest()

        if(request.header("key") && request.header("key") ==this.key){
            return true
        }else{
            return false
        }
        
       
    }

}