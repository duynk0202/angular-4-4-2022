import { Injectable } from '@angular/core';

import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  listUser:User[]=[];
  users:User = new User;
  constructor() { }
  verifyUsers(user:User){
    if(user.email=="duy@gmail.com" && user.password=='duy02022002'){
      return true;
    }
    return false;
  }
  
  checkLogin(){
    let users = localStorage.getItem('users');
    if(users){
        let user=<User>JSON.parse(users);
        return this.verifyUsers(user);
      }
      return false
        
  }
  doLogin(user:User){
    if(this.verifyUsers(user)){
      localStorage.setItem('users',JSON.stringify(user))
      return true;
    }
    return false
  }
  doRegister(user:User){
    
    this.listUser.push({"id":this.listUser.length+1,"email":user.email,"name":user.name,"password":user.password,"created_at":user.created_at});
    this.doSave(this.listUser);
  }
  doSave(arrUser:User[]){
    localStorage.setItem('saveUser',JSON.stringify(arrUser))
  }
}
