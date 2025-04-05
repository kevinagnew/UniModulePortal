import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPortalComponent } from './admin-portal.component';
import { AdminPortalLoginComponent } from './admin-portal-login/admin-portal-login.component';
import { HttpLoaderFactory, SharedModule } from '../shared.module';
import { AdminPortalRegisterComponent } from './admin-portal-register/admin-portal-register.component';
import { AdminPortalDashboardComponent } from './admin-portal-dashboard/admin-portal-dashboard.component';
import { AdminPortalModulesComponent } from './admin-portal-modules/admin-portal-modules.component';
import { RouterModule } from '@angular/router';
import { AdminPortalStudentManagementRegisterComponent } from './admin-portal-student-management-register/admin-portal-student-management-register.component';
import { AdminPortalStudentManagementViewComponent } from './admin-portal-student-management-view/admin-portal-student-management-view.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { AdminPortalModulesEditComponent } from './admin-portal-modules/admin-portal-modules-edit/admin-portal-modules-edit.component';
import { AdminPortalModulesEnterComponent } from './admin-portal-modules/admin-portal-modules-enter/admin-portal-modules-enter.component';
import { AdminPortalModulesViewComponent } from './admin-portal-modules/admin-portal-modules-view/admin-portal-modules-view.component';

@NgModule({
    declarations: [
        AdminPortalComponent,
        AdminPortalLoginComponent,
        AdminPortalRegisterComponent,
        AdminPortalDashboardComponent,
        AdminPortalModulesComponent,
        AdminPortalStudentManagementRegisterComponent,
        AdminPortalStudentManagementViewComponent,
        AdminPortalModulesEditComponent,
        AdminPortalModulesEnterComponent,
        AdminPortalModulesViewComponent
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
        AdminPortalComponent,
        AdminPortalLoginComponent,
        AdminPortalRegisterComponent,
        AdminPortalDashboardComponent,
        AdminPortalModulesComponent,
        AdminPortalStudentManagementRegisterComponent,
        AdminPortalStudentManagementViewComponent,
        AdminPortalModulesEditComponent,
        AdminPortalModulesEnterComponent,
        AdminPortalModulesViewComponent
    ]
})
export class AdminPortalModule { }
