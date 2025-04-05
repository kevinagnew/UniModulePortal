import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPortalModulesViewComponent } from './admin-portal-modules-view.component';

describe('AdminPortalModulesViewComponent', () => {
  let component: AdminPortalModulesViewComponent;
  let fixture: ComponentFixture<AdminPortalModulesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPortalModulesViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPortalModulesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
