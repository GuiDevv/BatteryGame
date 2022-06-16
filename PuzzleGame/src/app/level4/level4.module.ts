import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BatteryComponent } from '../battery/battery.component';
import { LeverComponent } from '../lever/lever.component';

import { IonicModule } from '@ionic/angular';

import { Level4PageRoutingModule } from './level4-routing.module';

import { Level4Page } from './level4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Level4PageRoutingModule
  ],
  declarations: [Level4Page, BatteryComponent, LeverComponent]
})
export class Level4PageModule {}