import { Component, OnInit, ViewChild } from '@angular/core';
import { Button } from 'protractor';
import { BatteryComponent } from '../battery/battery.component';

@Component({
  selector: 'app-game3',
  templateUrl: './game3.page.html',
  styleUrls: ['./game3.page.scss'],
})
export class Game3Page implements OnInit {
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

  ngOnInit() {
  }

  get UpdateBatteryFunc() {
    return this.UpdateBattery.bind(this);
  }

  UpdateBattery() {

    this.batteryCount = this.batteryCount + 1;

    if (this.batteryCount != 7){     
      this.battery.UpdateBattery(this.batteryCount);
    }
    else {
      this.battery.UpdateBattery(this.batteryCount);
      this.OnLevelCompleted();
    }

  }

  OnLevelCompleted() {
    this.LevelCompleted = true;
    this.Button = "display: block;"
    this.Info = "display: none;"
  }
}
