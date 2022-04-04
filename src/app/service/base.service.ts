import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResultList } from '../model/list-result.model';
@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private httpClient:HttpClient|any;
  private API_SERVER="https://gorest.co.in";
  private header:HttpHeaders|any;
  constructor(injector:Injector) {
    if(injector){
      this.header=new HttpHeaders().set('Content-type','application/json');
      this.header=this.header.set('Authorization','Bearer 65191131d9ee8711421daf6d239bcf136e8bf0640d1a3f812db0608d9afff2b7');
      this.httpClient=injector.get(HttpClient);
      
    }
   } 
   public get(path:string,params:any){
      return new Promise<ResultList>((thanhcong,thatbai)=>{
        try{
          this.httpClient.get(this.API_SERVER+path,{params,headers:this.header}).subscribe((res:any)=>{
            let rs:ResultList=new ResultList;
            rs.data=res;
            thanhcong(rs);
          });
        }catch(error){
          thatbai(error);
        }
      })
   }
   public post(path:string,body:any){
      return new Promise((thanhcong,thatbai)=>{
        try{
          this.httpClient.post(this.API_SERVER+path,body,{headers:this.header}).subscribe((res:any)=>{
            thanhcong(res);
          });
        }catch(error){
          thatbai(error);
        }
      })
   }
   public delete(path:string){
      return new Promise((thanhcong,thatbai)=>{
        try{
          this.httpClient.delete(this.API_SERVER+path,{headers:this.header}).subscribe((res:any)=>{
            thanhcong(res);
          });
        }catch(error){
          thatbai(error);
        }
      })
   }
   public patch(path:string,body:any){
    return new Promise((thanhcong,thatbai)=>{
      try{
        this.httpClient.patch(this.API_SERVER+path,body).subscribe((res:any)=>{
          thanhcong(res);
        })
      }catch(err){
        thatbai(err);
      }
    })
 }
}
