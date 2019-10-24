import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map-drawer',
  templateUrl: './google-map-drawer.component.html',
  styleUrls: ['./google-map-drawer.component.scss']
})
export class GoogleMapDrawerComponent implements OnInit {
  lat = 24.1504536;
  lng = 120.68325279999999;

  constructor() { }

  ngOnInit() {
  }

}
