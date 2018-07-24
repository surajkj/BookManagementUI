import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlcontainerComponent } from './plcontainer.component';

describe('PlcontainerComponent', () => {
  let component: PlcontainerComponent;
  let fixture: ComponentFixture<PlcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
