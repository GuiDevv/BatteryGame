import { Component, OnInit, ViewChild } from '@angular/core';
import { BatteryComponent } from '../battery/battery.component';
import { Flashlight } from '@awesome-cordova-plugins/flashlight/ngx';
import { LevelService } from '../level.service';

@Component({
  selector: 'app-level7',
  templateUrl: './level7.page.html',
  styleUrls: ['./level7.page.scss'],
})
export class Level7Page implements OnInit {

  constructor(private levelService:LevelService, private flashlight: Flashlight) { 
    document.addEventListener("backbutton", function() {
      // pass exitApp as callbacks to the switchOff method
      this.getFlashlightMode();
    }, false);
  }

  @ViewChild (BatteryComponent) battery:BatteryComponent;

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

  getFlashlightMode(){
    return this.flashlight.isSwitchedOn();
    console.log("Ligada");
    this.Button = "display: block;"
  }

  SetCurrentLevel(level) {
    this.levelService.setCurrentLevel(level);
    console.log(level);
  }
}
