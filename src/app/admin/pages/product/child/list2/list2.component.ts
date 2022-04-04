import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/model/user.model';
@Component({
  selector: 'app-list2',
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.scss']
})
export class List2Component implements OnInit {
  searchText:any;
  @Input('saveUser') listUser:User[]=[];
  @Output('sua') suaUser: EventEmitter <any> = new EventEmitter;
 
  constructor() { }

  ngOnInit(): void {
  }
  deleteUser(i:number){
    if(confirm("Bạn có muốn xóa") == true) {
    this.listUser.splice(i,1);
    this.saveUser(this.listUser);
  }
  else{
    alert('Xóa thất bại');
  }
}
  editUser(i:number){
    
    this.suaUser.emit(i);
  }
  saveUser(arr:User[]){
    localStorage.setItem('saveUser',JSON.stringify(arr));
  }
}
