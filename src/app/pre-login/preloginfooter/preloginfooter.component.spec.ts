import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreloginfooterComponent } from './preloginfooter.component';

describe('PreloginfooterComponent', () => {
  let component: PreloginfooterComponent;
  let fixture: ComponentFixture<PreloginfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreloginfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreloginfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
