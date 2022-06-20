import { Component, OnInit } from '@angular/core';
import { LevelService } from '../level.service';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.page.html',
  styleUrls: ['./levels.page.scss'],
})
export class LevelsPage implements OnInit {

  levelCompleted1;

  constructor(private levelService:LevelService) { }

  ngOnInit() {
    this.levelCompleted1 = this.levelService.getCompleted(0);
  }

  getCompleted(){
    this.levelCompleted1 = this.levelService.getCompleted(0);
  }
}
