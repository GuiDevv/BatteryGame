import { Component, OnInit, ViewChild } from '@angular/core';
import { BatteryComponent } from '../battery/battery.component';
import { Button } from 'protractor';
import { LevelService } from '../level.service';

@Component({
  selector: 'app-level6',
  templateUrl: './level6.page.html',
  styleUrls: ['./level6.page.scss'],
})
export class Level6Page implements OnInit {

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

  rightCharge:number;
  leverLevel:number;
  finished:boolean = true;

  ngOnInit() {
    this.rightCharge = Math.ceil(Math.random() * (20 - 1) + 1);
    console.log(this.rightCharge);
  }

  get UpdateBatteryFunc() {
    return this.UpdateBattery.bind(this);
  }

  UpdateBattery() {
    if(this.finished){
      if(this.rightCharge >= this.leverLevel && this.rightCharge - this.leverLevel <= 7){
        this.battery.UpdateBattery(7 - (this.rightCharge - this.leverLevel));
      }
      else if(this.rightCharge <= this.leverLevel && this.leverLevel - this.rightCharge <= 7){
        this.battery.UpdateBattery(7 - (this.leverLevel - this.rightCharge));
      }
      else{
        this.battery.UpdateBattery(0);
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

  SetCurrentLevel(level) {
    this.levelService.setCurrentLevel(level);
    console.log(level);
  }
}
