import { Component, OnInit, ViewChild } from '@angular/core';
import { Button } from 'protractor';
import { BatteryComponent } from '../battery/battery.component';
import { LevelService } from '../level.service';

@Component({
  selector: 'app-level2',
  templateUrl: './level2.page.html',
  styleUrls: ['./level2.page.scss'],
})
export class Level2Page implements OnInit {

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

  SetCurrentLevel(level) {
    this.levelService.setCurrentLevel(level);
    console.log(level);
  }

  UnlockLevel(level){
    this.levelService.unlockLevel(level);
  }
}
