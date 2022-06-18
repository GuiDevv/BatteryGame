import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { BatteryComponent } from '../battery/battery.component';
import { Level5PageRoutingModule } from './level5-routing.module';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';

import { Level5Page } from './level5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Level5PageRoutingModule
  ],
  declarations: [Level5Page,  BatteryComponent],
  providers: [ScreenOrientation],
})
export class Level5PageModule {}
