import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FpeListComponent } from './fpe-list.component';

describe('FpeListComponent', () => {
  let component: FpeListComponent;
  let fixture: ComponentFixture<FpeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FpeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FpeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
