import { Component, OnInit, ViewChild } from '@angular/core';
import { BatteryComponent } from '../battery/battery.component';
import { Button } from 'protractor';
import { LevelService } from '../level.service';

@Component({
  selector: 'app-level4',
  templateUrl: './level4.page.html',
  styleUrls: ['./level4.page.scss'],
})
export class Level4Page implements OnInit {

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

  leverLevel:number;
  finished:boolean = true;

  ngOnInit() {
  }

  get UpdateBatteryFunc() {
    return this.UpdateBattery.bind(this);
  }

  UpdateBattery() {
    if(this.finished)
    this.battery.UpdateBattery(this.leverLevel);
    if(this.leverLevel === 7)
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

  SetCurrentLevel(level) {
    this.levelService.setCurrentLevel(level);
    console.log(level);
  }
}
