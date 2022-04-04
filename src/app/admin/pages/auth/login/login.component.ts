import { Component, OnInit } from '@angular/core';
import {NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  users:User=new User;
  constructor( private router:Router, private authService:AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(formLogin:NgForm){
    if(formLogin.valid){
      if(this.authService.doLogin(this.users)){
        alert('đăng nhập thành công')
        this.router.navigate(['admin/home'])

      }else{
        alert('Đăng nhập thất bại');
      }
      
    }
  }
}
