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
  timeOutHandler;
  @Input() PressedFunction: Function;
  @Input() ReleaseFunction: Function;
  @Input() UsePressedButton: boolean = false;

  ngOnInit() {}

  ButtonClick():void{
      if(this.UsePressedButton){
          this.timeOutHandler = setInterval(() => {
          this.PressedFunction();
        }, 1000);
      }
      else{
        this.Counter = this.Counter + 1;
        console.log(this.Counter);
        this.PressedFunction();
      }
      
  }

  ButtonReleased():void{
    if (this.timeOutHandler) {
      clearTimeout(this.timeOutHandler);
      this.timeOutHandler = null;
    }
  }
  

}
