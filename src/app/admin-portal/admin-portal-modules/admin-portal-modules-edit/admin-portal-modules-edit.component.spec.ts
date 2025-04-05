import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPortalModulesEditComponent } from './admin-portal-modules-edit.component';

describe('AdminPortalModulesEditComponent', () => {
  let component: AdminPortalModulesEditComponent;
  let fixture: ComponentFixture<AdminPortalModulesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPortalModulesEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPortalModulesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
