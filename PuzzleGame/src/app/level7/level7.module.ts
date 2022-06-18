import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { BatteryComponent } from '../battery/battery.component';
import { Level7PageRoutingModule } from './level7-routing.module';
import { Flashlight } from '@awesome-cordova-plugins/flashlight';

import { Level7Page } from './level7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Level7PageRoutingModule
  ],
  declarations: [Level7Page,  BatteryComponent],

})
export class Level7PageModule {}
