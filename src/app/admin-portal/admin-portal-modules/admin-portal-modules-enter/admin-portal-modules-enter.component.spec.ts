import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPortalModulesEnterComponent } from './admin-portal-modules-enter.component';

describe('AdminPortalModulesEnterComponent', () => {
  let component: AdminPortalModulesEnterComponent;
  let fixture: ComponentFixture<AdminPortalModulesEnterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPortalModulesEnterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPortalModulesEnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
