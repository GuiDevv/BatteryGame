import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BatteryComponent } from '../battery/battery.component';
import { ButtonComponent } from '../button/button.component';
import { IonicModule } from '@ionic/angular';

import { Level3PageRoutingModule } from './level3-routing.module';

import { Level3Page } from './level3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Level3PageRoutingModule
  ],
  declarations: [Level3Page, BatteryComponent, ButtonComponent]
})
export class Level3PageModule {}
