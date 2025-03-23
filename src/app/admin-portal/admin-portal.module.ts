import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPortalComponent } from './admin-portal.component';
import { AdminPortalLoginComponent } from './admin-portal-login/admin-portal-login.component';
import { SharedModule } from '../shared.module';
import { AdminPortalRegisterComponent } from './admin-portal-register/admin-portal-register.component';


@NgModule({
  declarations: [
    AdminPortalComponent, 
    AdminPortalLoginComponent,
    AdminPortalRegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AdminPortalComponent,
    AdminPortalLoginComponent,
    AdminPortalRegisterComponent
  ]
})
export class AdminPortalModule { }
