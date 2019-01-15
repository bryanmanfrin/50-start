import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementPosterComponent } from './advertisement-poster.component';

describe('AdvertisementPosterComponent', () => {
  let component: AdvertisementPosterComponent;
  let fixture: ComponentFixture<AdvertisementPosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisementPosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
