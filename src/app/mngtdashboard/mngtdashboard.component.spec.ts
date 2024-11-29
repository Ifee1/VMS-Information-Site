import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MngtdashboardComponent } from './mngtdashboard.component';

describe('MngtdashboardComponent', () => {
  let component: MngtdashboardComponent;
  let fixture: ComponentFixture<MngtdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MngtdashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MngtdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
