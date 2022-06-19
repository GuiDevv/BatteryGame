import { Component, OnInit } from '@angular/core';

import { LevelService } from '../level.service';

@Component({
  selector: 'app-hint',
  templateUrl: './hint.page.html',
  styleUrls: ['./hint.page.scss'],
})
export class HintPage implements OnInit {
  currentHint;

  constructor(private levelService: LevelService) { }

  ngOnInit() {
    this.getCurrentHint();
  }
  
  getHint(hintNumber){
    return this.levelService.getCurrentHint();
  }

  getCurrentHint(): void{
    this.currentHint = this.getHint(this.levelService.getCurrentLevel() - 1)
  }
}