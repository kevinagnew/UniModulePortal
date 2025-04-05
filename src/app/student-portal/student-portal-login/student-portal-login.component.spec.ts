import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPortalLoginComponent } from './student-portal-login.component';

describe('StudentPortalLoginComponent', () => {
  let component: StudentPortalLoginComponent;
  let fixture: ComponentFixture<StudentPortalLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentPortalLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentPortalLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
