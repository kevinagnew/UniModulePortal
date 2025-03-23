import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPortalComponent } from './admin-portal.component';
import { AdminPortalLoginComponent } from './admin-portal-login/admin-portal-login.component';
import { SharedModule } from '../shared.module';
import { AdminPortalRegisterComponent } from './admin-portal-register/admin-portal-register.component';
import { AdminPortalDashboardComponent } from './admin-portal-dashboard/admin-portal-dashboard.component';


@NgModule({
  declarations: [
    AdminPortalComponent, 
    AdminPortalLoginComponent,
    AdminPortalRegisterComponent,
    AdminPortalDashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AdminPortalComponent,
    AdminPortalLoginComponent,
    AdminPortalRegisterComponent,
    AdminPortalDashboardComponent
  ]
})
export class AdminPortalModule { }
