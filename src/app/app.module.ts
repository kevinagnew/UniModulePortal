import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Import the routing module
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared.module'; // Ensure RouterModule is imported
import { AdminPortalModule } from './admin-portal/admin-portal.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule, 
    SharedModule,
    AdminPortalModule
  ],
  exports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    AdminPortalModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
