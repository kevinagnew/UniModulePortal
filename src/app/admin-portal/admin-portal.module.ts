import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPortalComponent } from './admin-portal.component';
import { AdminPortalLoginComponent } from './admin-portal-login/admin-portal-login.component';
import { SharedModule } from '../shared.module';


@NgModule({
  declarations: [
    AdminPortalComponent, 
    AdminPortalLoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AdminPortalComponent,
    AdminPortalLoginComponent
  ]
})
export class AdminPortalModule { }
