import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FpeToppadComponent } from './fpe-toppad.component';

describe('FpeToppadComponent', () => {
  let component: FpeToppadComponent;
  let fixture: ComponentFixture<FpeToppadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FpeToppadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FpeToppadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
