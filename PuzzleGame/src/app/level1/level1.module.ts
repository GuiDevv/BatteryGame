import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BatteryComponent } from '../battery/battery.component';
import { ButtonComponent } from '../button/button.component';

import { IonicModule } from '@ionic/angular';

import { Level1PageRoutingModule } from './level1-routing.module';

import { Level1Page } from './level1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Level1PageRoutingModule
  ],
  declarations: [Level1Page, BatteryComponent, ButtonComponent]
})
export class Level1PageModule {}
