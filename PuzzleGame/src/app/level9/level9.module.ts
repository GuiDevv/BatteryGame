import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BatteryComponent } from '../battery/battery.component';
import { ButtonComponent } from '../button/button.component';

import { IonicModule } from '@ionic/angular';

import { Level9PageRoutingModule } from './level9-routing.module';

import { Level9Page } from './level9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Level9PageRoutingModule
  ],
  declarations: [Level9Page, BatteryComponent, ButtonComponent]
})
export class Level9PageModule {}
