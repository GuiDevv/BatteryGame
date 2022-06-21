import { Component, OnInit, ViewChild } from '@angular/core';
import { Button } from 'protractor';
import { BatteryComponent } from '../battery/battery.component';
import { LevelService } from '../level.service';

@Component({
  selector: 'app-level9',
  templateUrl: './level9.page.html',
  styleUrls: ['./level9.page.scss'],
})
export class Level9Page implements OnInit {

  constructor(private levelService:LevelService) { }

  @ViewChild(BatteryComponent) battery:BatteryComponent;

  //Toda Game page precisa ter
  Size =  "width: 60vw";
  UseBatteryOpacity = false;
  UseChargeOpacity = true;
  LevelCompleted = false;
  Button = "display: none;"
  Info = "display: block;"
  batteryCount = 0;

  leverLevel;
  rightCharge:number;

  ngOnInit() {
    this.rightCharge = Math.ceil(Math.random() * (7 - 1) + 1);
  }

  get UpdateBatteryFunc() {
    return this.UpdateBattery.bind(this);
  }

  UpdateBattery() {
    if(this.leverLevel === this.rightCharge){
      this.batteryCount++;
      this.battery.UpdateBattery(this.batteryCount);
      this.rightCharge = Math.ceil(Math.random() * (7 - 1) + 1);
    }
    if(this.batteryCount >= 7){
      this.OnLevelCompleted();
    }
  }

  OnLevelCompleted() {
    this.LevelCompleted = true;
    this.Button = "display: block;"
    this.Info = "display: none;"
  }

  SetCurrentLevel(level) {
    this.levelService.setCurrentLevel(level);
    console.log(level);
  }

  UnlockLevel(level){
    this.levelService.unlockLevel(level);
  }
}
