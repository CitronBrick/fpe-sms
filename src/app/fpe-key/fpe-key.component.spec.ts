import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FpeKeyComponent } from './fpe-key.component';

describe('FpeKeyComponent', () => {
  let component: FpeKeyComponent;
  let fixture: ComponentFixture<FpeKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FpeKeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FpeKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
