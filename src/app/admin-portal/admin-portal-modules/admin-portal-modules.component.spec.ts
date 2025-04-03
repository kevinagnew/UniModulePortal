import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPortalModulesComponent } from './admin-portal-modules.component';

describe('AdminPortalModulesComponent', () => {
  let component: AdminPortalModulesComponent;
  let fixture: ComponentFixture<AdminPortalModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPortalModulesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPortalModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
