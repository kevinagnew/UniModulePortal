import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Import the routing module
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared.module'; // Ensure RouterModule is imported
import { AdminPortalModule } from './admin-portal/admin-portal.module';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
