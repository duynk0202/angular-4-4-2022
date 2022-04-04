import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ResultList } from 'src/app/model/list-result.model';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/service/product.service';
import { User } from 'src/app/model/user.model';
import { flower } from 'src/app/model/flower.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
 
  constructor() { }

  title:string = "Quản lý nhân viên";
  users:User= new User;
  listUser:User[] = [];
  isShowUser:boolean = false;
  isShow:boolean=true;
  index:number=0;
  ngOnInit(): void {
    this.listUser = this.doReadData();
  }
  onUser(data:User){
    this.isShowUser = false;
    if(this.isShow==true){
      this.listUser.push(data);
      this.doSaveData(this.listUser);
    }
    else if(this.isShow==false){
      this.users = new User;
      this.listUser.splice(this.index,1,data);
      this.doSaveData(this.listUser);
      this.isShow=true;
    }
  }
  updateUser(i:number){
    this.isShowUser=true;
    this.users=this.listUser[i];
    this.index=i;
    this.isShow=false;
  }
  doThemMoi() {
    this.isShowUser = true;
  }

  doSaveData(arr:User[]){
    localStorage.setItem('saveUser', JSON.stringify(arr));
  }

  doReadData(){
    let data = localStorage.getItem('saveUser');
    if(data != null)
    {
      return JSON.parse(data);
    }else{
      return [];
    }
  }
  

}
