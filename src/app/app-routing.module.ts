import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPortalRegisterComponent } from './admin-portal/admin-portal-register/admin-portal-register.component';
import { AdminPortalLoginComponent } from './admin-portal/admin-portal-login/admin-portal-login.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminPortalDashboardComponent } from './admin-portal/admin-portal-dashboard/admin-portal-dashboard.component';
import { AdminPortalModulesComponent } from './admin-portal/admin-portal-modules/admin-portal-modules.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { AdminPortalStudentManagementRegisterComponent } from './admin-portal/admin-portal-student-management-register/admin-portal-student-management-register.component';
import { AdminPortalStudentManagementViewComponent } from './admin-portal/admin-portal-student-management-view/admin-portal-student-management-view.component';
import { StudentPortalLoginComponent } from './student-portal/student-portal-login/student-portal-login.component';
import { StudentPortalComponent } from './student-portal/student-portal.component';
import { StudentPortalDashboardComponent } from './student-portal/student-portal-dashboard/student-portal-dashboard.component';
import { StudentAuthGuard } from './guards/student-auth.guard';

const routes: Routes = [
  //{ path: '', redirectTo: 'admin-portal', pathMatch: 'full' },
  { path: 'admin-portal/login', component: AdminPortalLoginComponent },
  { path: 'admin-portal/register', component: AdminPortalRegisterComponent },
  {
    path: 'admin-portal',
    component: AdminPortalComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: AdminPortalDashboardComponent },
      { path: 'student-management-register', component: AdminPortalStudentManagementRegisterComponent },
      { path: 'student-management-view', component: AdminPortalStudentManagementViewComponent },
      { path: 'modules', component: AdminPortalModulesComponent }
    ]
  },
  { path: 'student-portal/login', component: StudentPortalLoginComponent },
  { 
    path: 'student-portal', 
    component: StudentPortalComponent, 
    canActivate: [StudentAuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: StudentPortalDashboardComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
