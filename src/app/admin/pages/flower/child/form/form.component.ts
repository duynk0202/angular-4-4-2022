import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { flower } from 'src/app/model/flower.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input('sua') flowers:flower=new flower;
  @Output('themhoa') addHoa: EventEmitter<any> = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }
  themHoa(){
      let tmp = Object.assign({}, this.flowers);
      this.addHoa.emit(tmp);
    
  }
 
}
