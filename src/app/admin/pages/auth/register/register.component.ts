import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  data:User []=[];
  saveUser:User=new User;
  constructor(private router:Router,private authService:AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    if(form.valid){
        let tmp=Object.assign({},this.saveUser)
        this.authService.doRegister(tmp);
        alert("Đăng ký thành công");
        this.router.navigate(['login'])
    }
    else{
      alert("Đăng ký thất bại")
    }
  }
}
