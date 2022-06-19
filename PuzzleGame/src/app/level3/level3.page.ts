import { Component, OnInit, ViewChild } from '@angular/core';
import { count } from 'console';
import { BatteryComponent } from '../battery/battery.component';
import { interval } from 'rxjs';
import { ButtonComponent } from '../button/button.component';
import { LevelService } from '../level.service';

@Component({
  selector: 'app-level3',
  templateUrl: './level3.page.html',
  styleUrls: ['./level3.page.scss'],
})
export class Level3Page implements OnInit {

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

  counter = 0;
  timeOutHandler;
  name:String;

  ngOnInit() {
    
  }

  get PressedFunctionFunc() {
    return this.PressFunction.bind(this);
  }
  get ReleaseFunctionFunc() {
    return this.ReleaseFunction.bind(this);
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

  ReleaseFunction(){

  }

  PressFunction() {
    this.UpdateBattery();
  }

  SetCurrentLevel(level) {
    this.levelService.setCurrentLevel(level);
    console.log(level);
  }
}