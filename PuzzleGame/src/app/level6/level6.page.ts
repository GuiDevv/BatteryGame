import { Component, OnInit, ViewChild } from '@angular/core';
import { BatteryComponent } from '../battery/battery.component';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { Button } from 'protractor';
import { LevelService } from '../level.service';

import { RangeCustomEvent } from '@ionic/angular';
import { RangeValue } from '@ionic/core';

@Component({
  selector: 'app-level6',
  templateUrl: './level6.page.html',
  styleUrls: ['./level6.page.scss'],
})
export class Level6Page implements OnInit {

  constructor(private levelService:LevelService, private screenOrientation: ScreenOrientation) {
    this.screenOrientation.onChange().subscribe(
      () => {
          this.OnScreenRotated();
      }
   );
   }

  @ViewChild(BatteryComponent) battery:BatteryComponent;

  //Toda Game page precisa ter
  Size =  "width: 60vw";
  UseBatteryOpacity = false;
  UseChargeOpacity = true;
  LevelCompleted = false;
  Button = "display: none;"
  Info = "display: block;"
  Next = "style: width: 5vh;"
  batteryCount = 0;

  counter = 0;
  timeOutHandler;
  name:String;

  rightCharge:number;
  leverLevel:number;
  finished:boolean = true;

  ngOnInit() {
    this.rightCharge = Math.ceil(Math.random() * (10 - 1) + 1);
    this.OnScreenRotated();
  }

  get UpdateBatteryFunc() {
    return this.UpdateBattery.bind(this);
  }

  UpdateBattery() {
    if(this.finished){
      if(this.rightCharge >= this.leverLevel && this.rightCharge - this.leverLevel <= 9){
        this.battery.UpdateBattery(9 - (this.rightCharge - this.leverLevel));
      }
      else if(this.rightCharge <= this.leverLevel && this.leverLevel - this.rightCharge <= 9){
        this.battery.UpdateBattery(9 - (this.leverLevel - this.rightCharge));
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

  UnlockLevel(level){
    this.levelService.unlockLevel(level);
  }

  getCurrentScreenOrientation(){
    return this.screenOrientation.type;
  }

  OnScreenRotated(){
    if (this.getCurrentScreenOrientation() == "portrait-primary"){
      this.Size =  "width: 60vw";
      this.Next = "width: 5vh";
    }
    else{
      this.Size =  "width: 60vh";
      this.Next = "width: 5vw";
    }

  }
}
