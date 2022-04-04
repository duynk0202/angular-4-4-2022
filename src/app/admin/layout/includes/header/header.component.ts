import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  name : string="Nguyễn Khánh Duy";
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    let users=localStorage.getItem('users');
    if(users){
      //  let user=<Users>JSON.parse(users)
       
       localStorage.removeItem('users')
       this.router.navigate(['login'])
    }
     else {
        alert('Lỗi')
      }
  }
}
