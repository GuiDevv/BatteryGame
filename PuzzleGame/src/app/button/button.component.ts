import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {

  constructor() { }

  Image:String = "../../assets/icon/Button.png";
  Counter = 0;
  @Input() UpdateBattery: Function;

  ngOnInit() {}

  ButtonClick():void{
      this.Counter = this.Counter + 1;
      console.log(this.Counter);
      this.UpdateBattery();
  }
  

}
