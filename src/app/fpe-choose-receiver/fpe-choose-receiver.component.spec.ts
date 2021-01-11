import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FpeChooseReceiverComponent } from './fpe-choose-receiver.component';

describe('FpeChooseReceiverComponent', () => {
  let component: FpeChooseReceiverComponent;
  let fixture: ComponentFixture<FpeChooseReceiverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FpeChooseReceiverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FpeChooseReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
