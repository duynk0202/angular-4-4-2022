import { Component, OnInit } from '@angular/core';
import { flower } from 'src/app/model/flower.model';

@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.scss']
})
export class FlowerComponent implements OnInit {
  listFlower:flower[]= [];  
  flowers:flower = new flower;
  isShowHoa:boolean = false;
  isShow:boolean=true;
  index:number=0;

  ngOnInit(): void {
    this.listFlower = this.doReadData();
  }
  showHoa(data:flower){
    this.isShowHoa = false;
    if(this.isShow==true){
      this.listFlower.push(data);
      this.doSaveData(this.listFlower);
    }
    else if(this.isShow==false){
      this.flowers = new flower ;
      this.listFlower.splice(this.index,1,data);
      this.doSaveData(this.listFlower);
      this.isShow=true;
    }
  }
  editHoa(i:number){
    this.isShowHoa=true;
    this.flowers=this.listFlower[i];
    this.index=i;
    this.isShow=false;
  }
  doThemMoi() {
    this.isShowHoa = true;
  }

  doSaveData(arr:flower[]){
    localStorage.setItem('listFlower', JSON.stringify(arr));
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
