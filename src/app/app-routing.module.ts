import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { AdminPortalRegisterComponent } from './admin-portal/admin-portal-register/admin-portal-register.component';
import { AdminPortalLoginComponent } from './admin-portal/admin-portal-login/admin-portal-login.component';

const routes: Routes = [
  { path: '', component: AdminPortalLoginComponent },
  { path: 'admin/login', component: AdminPortalLoginComponent },
  { path: 'admin-portal-register', component: AdminPortalRegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Use forRoot() in the main module
  exports: [RouterModule]
})
export class AppRoutingModule { }
