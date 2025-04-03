import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPortalStudentManagementRegisterComponent } from './admin-portal-student-management-register.component';

describe('AdminPortalStudentManagementRegisterComponent', () => {
  let component: AdminPortalStudentManagementRegisterComponent;
  let fixture: ComponentFixture<AdminPortalStudentManagementRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPortalStudentManagementRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPortalStudentManagementRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
