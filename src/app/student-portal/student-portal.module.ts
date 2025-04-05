import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpLoaderFactory, SharedModule } from '../shared.module';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { StudentPortalComponent } from './student-portal.component';
import { StudentPortalLoginComponent } from './student-portal-login/student-portal-login.component';
import { StudentPortalDashboardComponent } from './student-portal-dashboard/student-portal-dashboard.component';



@NgModule({
  declarations: [
    StudentPortalComponent,
    StudentPortalLoginComponent,
    StudentPortalDashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    TranslateModule.forRoot({
        loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
        }
    }),
  ],
  exports: [
    StudentPortalComponent,
    StudentPortalLoginComponent,
    StudentPortalDashboardComponent
  ]
})
export class StudentPortalModule { }
