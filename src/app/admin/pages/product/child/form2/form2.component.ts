import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/model/user.model';
@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component implements OnInit {

  @Input('sua') users:User=new User;
  @Output('addUser') eventUser: EventEmitter<any> = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }
  addUser(){
   
    let tmp = Object.assign({}, this.users);
    this.eventUser.emit(tmp);
  }
}
