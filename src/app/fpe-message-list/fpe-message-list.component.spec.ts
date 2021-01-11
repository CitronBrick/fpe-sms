import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FpeMessageListComponent } from './fpe-message-list.component';

describe('FpeMessageListComponent', () => {
  let component: FpeMessageListComponent;
  let fixture: ComponentFixture<FpeMessageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FpeMessageListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FpeMessageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
