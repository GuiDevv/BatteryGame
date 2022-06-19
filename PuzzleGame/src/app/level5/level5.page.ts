import { Component, OnInit, ViewChild } from '@angular/core';
import { BatteryComponent } from '../battery/battery.component';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { LevelService } from '../level.service';

@Component({
  selector: 'app-level5',
  templateUrl: './level5.page.html',
  styleUrls: ['./level5.page.scss'],
})
export class Level5Page implements OnInit {

  constructor(private levelService:LevelService, private screenOrientation: ScreenOrientation) { 
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
    this.getCurrentScreenOrientation();
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
    
    this.UpdateBattery();
  }

  SetCurrentLevel(level) {
    this.levelService.setCurrentLevel(level);
    console.log(level);
  }
 
}
