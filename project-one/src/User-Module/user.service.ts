import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './interface/user';

@Injectable()
export class UserService {
  public users: User [] = []

  getAllUsers(): User []  {
    return this.users.length > 0 ? this.users : []
  }

  getUser(email:string): User {

    const userData = this.users.filter(item=>item.email == email)
    

    if(userData && Array.isArray(userData) && userData.length > 0){
      return userData[0]
    }

    throw new NotFoundException("User Not Found")
    
  }

  addUser(user:User): Promise<User>{
    this.users.push(user)
    return Promise.resolve(user)
  }

  deleteUser(email:string) :User [] {
    const remainingUser = this.users.filter((item)=> item.email !== email )
    this.users = remainingUser
    return remainingUser|| []
  } 


}
