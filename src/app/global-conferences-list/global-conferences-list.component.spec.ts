import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalConferencesListComponent } from './global-conferences-list.component';

describe('GlobalConferencesListComponent', () => {
  let component: GlobalConferencesListComponent;
  let fixture: ComponentFixture<GlobalConferencesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalConferencesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalConferencesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
