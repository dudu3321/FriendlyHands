import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMapDrawerComponent } from './google-map-drawer.component';

describe('GoogleMapDrawerComponent', () => {
  let component: GoogleMapDrawerComponent;
  let fixture: ComponentFixture<GoogleMapDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleMapDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleMapDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
