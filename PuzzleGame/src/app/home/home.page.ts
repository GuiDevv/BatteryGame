import { Component } from '@angular/core';
import { LevelService } from '../level.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private levelService:LevelService) {}

  Size = "width: 70vw";
}
