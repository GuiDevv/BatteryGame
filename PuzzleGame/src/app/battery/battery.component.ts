import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-battery',
  templateUrl: './battery.component.html',
  styleUrls: ['./battery.component.scss'],
})
export class BatteryComponent implements OnInit {

  constructor() { }

  Bars = new Array(20);
  Image:String = "../../assets/icon/BatteryIcon25.png";
  @Input() Size:String;

  ngOnInit() {}
}
