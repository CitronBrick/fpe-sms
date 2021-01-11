import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FpeComposeComponent } from './fpe-compose.component';

describe('FpeComposeComponent', () => {
  let component: FpeComposeComponent;
  let fixture: ComponentFixture<FpeComposeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FpeComposeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FpeComposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
