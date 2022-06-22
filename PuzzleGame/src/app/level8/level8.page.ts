import { Component, OnInit, ViewChild } from '@angular/core';
import { BatteryComponent } from '../battery/battery.component';
import { LevelService } from '../level.service';
import { BatteryStatus } from '@ionic-native/battery-status/ngx';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';

@Component({
  selector: 'app-level8',
  templateUrl: './level8.page.html',
  styleUrls: ['./level8.page.scss'],
})
export class Level8Page implements OnInit {

  constructor(private levelService:LevelService, private batteryStatus:BatteryStatus, private screenOrientation: ScreenOrientation) { 
    this.batteryStatus.onChange().subscribe(status => {
     // console.log(status.level, status.isPlugged);
      this.UpdateBattery(status.level);
  })
  this.screenOrientation.onChange().subscribe(
    () => {
        this.OnScreenRotated();
    }
 );
}

  @ViewChild (BatteryComponent) battery:BatteryComponent;

  //Toda Game page precisa ter
  Size =  "width: 60vw";
  UseBatteryOpacity = false;
  UseChargeOpacity = true;
  LevelCompleted = false;
  Button = "display: none;"
  Next = "style: width: 5vh;"
  Info = "display: block;"
  batteryCount = 0;

  ngOnInit() {
    this.OnScreenRotated();
  }

  get UpdateBatteryFunc() {
    return this.UpdateBattery.bind(this);
}

  UpdateBattery(number) {

    this.batteryCount = Math.ceil(number / 10);
    
    if (this.batteryCount != 9){     
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
    console.log("Venci");
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

