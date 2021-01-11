import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FpeKeypadComponent } from './fpe-keypad.component';

describe('FpeKeypadComponent', () => {
  let component: FpeKeypadComponent;
  let fixture: ComponentFixture<FpeKeypadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FpeKeypadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FpeKeypadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
