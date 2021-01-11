import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FpeMsgComposeComponent } from './fpe-msg-compose.component';

describe('FpeMsgComposeComponent', () => {
  let component: FpeMsgComposeComponent;
  let fixture: ComponentFixture<FpeMsgComposeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FpeMsgComposeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FpeMsgComposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
