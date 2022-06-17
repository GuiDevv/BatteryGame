import { Component, OnInit, ViewChild } from '@angular/core';
import { BatteryComponent } from '../battery/battery.component';
import { Button } from 'protractor';

@Component({
  selector: 'app-level6',
  templateUrl: './level6.page.html',
  styleUrls: ['./level6.page.scss'],
})
export class Level6Page implements OnInit {

  constructor() { }

  @ViewChild(BatteryComponent) battery:BatteryComponent;

  //Toda Game page precisa ter
  Size =  "width: 60vw";
  UseBatteryOpacity = false;
  UseChargeOpacity = true;
  LevelCompleted = false;
  Button = "display: none;"
  Info = "display: block;"
  batteryCount = 0;

  counter = 0;
  timeOutHandler;
  name:String;

  rightCharge:number;
  leverLevel:number;
  finished:boolean = true;

  ngOnInit() {
    this.rightCharge = 4;
  }

  get UpdateBatteryFunc() {
    return this.UpdateBattery.bind(this);
  }

  UpdateBattery() {
    if(this.finished){
      if(this.rightCharge >= this.leverLevel){
        this.battery.UpdateBattery(7 - (this.rightCharge - this.leverLevel));
      }
      else{
        this.battery.UpdateBattery(7 - (this.leverLevel - this.rightCharge));
      }
    }
    if(this.leverLevel === this.rightCharge)
      this.OnLevelCompleted();
  }

  OnLevelCompleted() {
    this.LevelCompleted = true;
    this.Button = "display: block;"
    this.Info = "display: none;"
    this.finished = false;
  }

  sliderLastChange() {
    this.UpdateBattery();
  }
}
