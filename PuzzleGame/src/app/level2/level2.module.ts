import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BatteryComponent } from '../battery/battery.component';
import { ButtonComponent } from '../button/button.component';

import { IonicModule } from '@ionic/angular';

import { Level2PageRoutingModule } from './level2-routing.module';

import { Level2Page } from './level2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Level2PageRoutingModule
  ],
  declarations: [Level2Page, BatteryComponent, ButtonComponent]
})
export class Level2PageModule {}
