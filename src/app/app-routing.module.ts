import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPortalRegisterComponent } from './admin-portal/admin-portal-register/admin-portal-register.component';
import { AdminPortalLoginComponent } from './admin-portal/admin-portal-login/admin-portal-login.component';
import { AdminPortalDashboardComponent } from './admin-portal/admin-portal-dashboard/admin-portal-dashboard.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: AdminPortalLoginComponent },
  { path: 'admin-portal/login', component: AdminPortalLoginComponent },
  { path: 'admin-portal/register', component: AdminPortalRegisterComponent },
  { path: 'admin-portal/dashboard', component: AdminPortalDashboardComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Use forRoot() in the main module
  exports: [RouterModule]
})
export class AppRoutingModule { }
