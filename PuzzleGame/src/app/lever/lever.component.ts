import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lever',
  templateUrl: './lever.component.html',
  styleUrls: ['./lever.component.scss'],
})
export class LeverComponent implements OnInit {

  constructor() { }

  Trail:String = "../../assets/icon/LeverTrail.png";
  Image:String = "../../assets/icon/Lever.png";
  Counter = 0;
  timeOutHandler;
  @Input() PressedFunction: Function;
  @Input() ReleaseFunction: Function;
  @Input() UsePressedButton: boolean = false;

  ngOnInit() {}

}
