import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarybookComponent } from './librarybook.component';

describe('LibrarybookComponent', () => {
  let component: LibrarybookComponent;
  let fixture: ComponentFixture<LibrarybookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrarybookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarybookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
