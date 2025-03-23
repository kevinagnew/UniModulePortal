import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPortalDashboardComponent } from './admin-portal-dashboard.component';

describe('AdminPortalDashboardComponent', () => {
  let component: AdminPortalDashboardComponent;
  let fixture: ComponentFixture<AdminPortalDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPortalDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPortalDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
