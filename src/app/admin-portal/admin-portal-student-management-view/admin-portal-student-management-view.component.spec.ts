import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPortalStudentManagementViewComponent } from './admin-portal-student-management-view.component';

describe('AdminPortalStudentManagementViewComponent', () => {
  let component: AdminPortalStudentManagementViewComponent;
  let fixture: ComponentFixture<AdminPortalStudentManagementViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPortalStudentManagementViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPortalStudentManagementViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
