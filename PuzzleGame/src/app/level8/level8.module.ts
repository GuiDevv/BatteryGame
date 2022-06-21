import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BatteryComponent } from '../battery/battery.component';
import { IonicModule } from '@ionic/angular';
import { BatteryStatus } from '@ionic-native/battery-status/ngx';


import { Level8PageRoutingModule } from './level8-routing.module';

import { Level8Page } from './level8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Level8PageRoutingModule
  ],
  declarations: [Level8Page,  BatteryComponent],
  providers: [BatteryStatus]
})
export class Level8PageModule {}
