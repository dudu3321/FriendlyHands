import { Component, OnInit } from '@angular/core';
import { NgAnimateScrollService } from 'ng-animate-scroll';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  title = 'ClientApp';

  constructor(private animateScrollService: NgAnimateScrollService) {

  }

  ngOnInit(): void {

  }

  onStartClick(): void {
    this.animateScrollService.scrollToElement('start', 1000);
  }
}
