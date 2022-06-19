import { Component, OnInit } from '@angular/core';
import { LevelService } from '../level.service';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.page.html',
  styleUrls: ['./levels.page.scss'],
})
export class LevelsPage implements OnInit {

  levelCompleted: boolean[];

  constructor(private levelService:LevelService) { }

  ngOnInit() {
    this.getCompleted;
  }

  getCompleted(){
    this.levelCompleted = this.levelService.getCompleted();
  }
}
