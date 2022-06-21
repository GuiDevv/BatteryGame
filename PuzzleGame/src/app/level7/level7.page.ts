import { Component, OnInit, ViewChild } from '@angular/core';
import { BatteryComponent } from '../battery/battery.component';
import { Shake } from '@ionic-native/shake/ngx';
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';
import { Platform } from '@ionic/angular';
import { LevelService } from '../level.service';

@Component({
  selector: 'app-level7',
  templateUrl: './level7.page.html',
  styleUrls: ['./level7.page.scss'],
})
export class Level7Page implements OnInit {

  constructor(private levelService:LevelService, private shake:Shake, private plataform:Platform, private vibration: Vibration) { 
    this.plataform.ready().then( () => {
      this.shake.startWatch(this.sensitive).subscribe( data => {
        this.UpdateBattery();
        //this.vibration.vibrate(1000);
        navigator.vibrate(1000);
      })
    })
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

  sensitive = 40;

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
