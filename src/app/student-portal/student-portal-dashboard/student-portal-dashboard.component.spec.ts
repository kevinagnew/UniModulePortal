import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPortalDashboardComponent } from './student-portal-dashboard.component';

describe('StudentPortalDashboardComponent', () => {
  let component: StudentPortalDashboardComponent;
  let fixture: ComponentFixture<StudentPortalDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentPortalDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentPortalDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
