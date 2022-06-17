import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BatteryComponent } from '../battery/battery.component';
import { ButtonComponent } from '../button/button.component';

import { IonicModule } from '@ionic/angular';

import { Level6PageRoutingModule } from './level6-routing.module';

import { Level6Page } from './level6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Level6PageRoutingModule
  ],
  declarations: [Level6Page, BatteryComponent, ButtonComponent]
})
export class Level6PageModule {}
