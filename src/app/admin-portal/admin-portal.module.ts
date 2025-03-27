import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPortalComponent } from './admin-portal.component';
import { AdminPortalLoginComponent } from './admin-portal-login/admin-portal-login.component';
import { SharedModule } from '../shared.module';
import { AdminPortalRegisterComponent } from './admin-portal-register/admin-portal-register.component';
import { AdminPortalDashboardComponent } from './admin-portal-dashboard/admin-portal-dashboard.component';
import { AdminPortalModulesComponent } from './admin-portal-modules/admin-portal-modules.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AdminPortalComponent, 
    AdminPortalLoginComponent,
    AdminPortalRegisterComponent,
    AdminPortalDashboardComponent,
    AdminPortalModulesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    AdminPortalComponent,
    AdminPortalLoginComponent,
    AdminPortalRegisterComponent,
    AdminPortalDashboardComponent,
    AdminPortalModulesComponent
  ]
})
export class AdminPortalModule { }
