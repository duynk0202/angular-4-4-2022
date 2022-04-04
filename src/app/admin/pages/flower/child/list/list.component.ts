import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { flower } from 'src/app/model/flower.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  searchText:any;
  constructor() { }
  @Input('hoa') listFlower:flower[]=[];
  @Output ('sua') editHoa: EventEmitter <any> = new EventEmitter;
  
  ngOnInit(): void {
  }
  deleteHoa(i:number){
   
if (confirm("Bạn có muốn xóa") == true) {
  this.listFlower.splice(i,1);
    this.saveHoa(this.listFlower);
} else {
  alert('Xóa không thành công')
}
    
  }
  suaHoa(i:number){
    this.editHoa.emit(i);
  }
  saveHoa(arr:flower[]){
    localStorage.setItem('listFlower',JSON.stringify(arr));
  }
}
