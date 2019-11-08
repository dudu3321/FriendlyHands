import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-location-filter',
  templateUrl: './location-filter.component.html',
  styleUrls: ['./location-filter.component.scss']
})
export class LocationFilterComponent implements OnInit {
  myControl = new FormControl();
  productControl = new FormControl();
  locations: string[] = ['基隆', '台北', '桃園', '新竹', '苗栗', '台中', '彰化'];
  productTypes: string[] = ['餅乾', '雨傘', '雜誌', '其他'];

  constructor() { }

  ngOnInit() {
  }

}
