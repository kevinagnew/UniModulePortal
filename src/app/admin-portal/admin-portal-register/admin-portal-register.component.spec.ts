import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPortalRegisterComponent } from './admin-portal-register.component';

describe('AdminPortalRegisterComponent', () => {
  let component: AdminPortalRegisterComponent;
  let fixture: ComponentFixture<AdminPortalRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPortalRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPortalRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
