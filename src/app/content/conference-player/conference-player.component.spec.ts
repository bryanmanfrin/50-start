import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferencePlayerComponent } from './conference-player.component';

describe('ConferencePlayerComponent', () => {
  let component: ConferencePlayerComponent;
  let fixture: ComponentFixture<ConferencePlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferencePlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferencePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
