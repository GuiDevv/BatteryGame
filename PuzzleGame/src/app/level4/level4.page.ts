import { Component, OnInit, ViewChild } from '@angular/core';
import { BatteryComponent } from '../battery/battery.component';
import { Gesture, GestureController } from '@ionic/angular';

@Component({
  selector: 'app-level4',
  templateUrl: './level4.page.html',
  styleUrls: ['./level4.page.scss'],
})
export class Level4Page implements OnInit {

  constructor(private gestureCtrl: GestureController) { }

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

    this.battery.UpdateBattery(7);
      this.OnLevelCompleted();

  }

  OnLevelCompleted() {
    this.LevelCompleted = true;
    this.Button = "display: block;"
    this.Info = "display: none;"
  }
}
