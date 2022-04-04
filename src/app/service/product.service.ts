import { Injectable, Injector } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService{

  constructor(injector:Injector) { 
    super(injector);
  }
  getData(params:any){
    return this.get("/public/v2/users/300/todos",params)
  }
  addData(body:any){
    return this.post("/public/v2/users/300/todos",body)
  }
  remove(id:any){
    return this.delete(`/public/v2/todos/${id}`);
  }
  editData(id:number,body:any){
    return this.patch(`/public/v2/users/100/todos/${id}`,body);
  }
 
  getlistData(id:number,params:any){
    return this.get(`/public/v2/todos/${id}`,params);
  }
}
