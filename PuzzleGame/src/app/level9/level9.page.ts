import { Component, OnInit, ViewChild } from '@angular/core';
import { Button } from 'protractor';
import { BatteryComponent } from '../battery/battery.component';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { LevelService } from '../level.service';

@Component({
  selector: 'app-level9',
  templateUrl: './level9.page.html',
  styleUrls: ['./level9.page.scss'],
})
export class Level9Page implements OnInit {

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

  leverLevel;
  rightCharge:number;

  ngOnInit() {
    this.rightCharge = Math.ceil(Math.random() * (9 - 1) + 1);
    this.OnScreenRotated();
  }

  get UpdateBatteryFunc() {
    return this.UpdateBattery.bind(this);
  }

  UpdateBattery() {
    if(this.leverLevel === this.rightCharge){
      this.batteryCount++;
      this.battery.UpdateBattery(this.batteryCount);
      this.rightCharge = Math.ceil(Math.random() * (9 - 1) + 1);
    }
    if(this.batteryCount >= 9){
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
