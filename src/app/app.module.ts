import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Importez le AppRoutingModule
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';

@NgModule({
    declarations: [
      AppComponent,
      NavbarComponent,
      FooterComponent
    ],
    imports: [
      // autres imports
    ],
    exports:[
    NavbarComponent,
    FooterComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }