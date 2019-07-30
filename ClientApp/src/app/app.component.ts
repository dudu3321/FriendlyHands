import { Component } from '@angular/core';
import { NgAnimateScrollService } from 'ng-animate-scroll';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ClientApp';
  lat = 24.1504536;
  lng = 120.68325279999999;

  constructor(private animateScrollService: NgAnimateScrollService) {

  }

  onStartClick(): void {
    this.animateScrollService.scrollToElement('start', 1000);
  }

}
