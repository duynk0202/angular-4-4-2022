import { Component, OnInit } from '@angular/core';
import { flower } from 'src/app/model/flower.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  listFlower:flower[]= [];  
  constructor() { }
 
  ngOnInit(): void {
    this.listFlower = this.doReadData();
  }
  doReadData(){
    let data = localStorage.getItem('listFlower');
    if(data != null)
    {
      return JSON.parse(data);
    }else{
      return [];
    }
  }

}
