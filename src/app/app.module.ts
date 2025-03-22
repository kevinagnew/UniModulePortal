import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Import the routing module
import { RouterModule } from '@angular/router'; // Ensure RouterModule is imported

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule, // Important for routing
    AppRoutingModule // Ensure routing module is included
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
