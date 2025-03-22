import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';

const routes: Routes = [
  { path: '', component: AdminPortalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Use forRoot() in the main module
  exports: [RouterModule]
})
export class AppRoutingModule { }
