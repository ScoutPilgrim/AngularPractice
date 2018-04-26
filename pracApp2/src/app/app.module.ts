import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AlertModule} from 'ng2-bootstrap';


import { AppComponent } from './app.component';
import { AnimationComponent } from './animation/animation.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {routing} from './app.routing';
import { DonaldComponent } from './donald/donald.component';
import { CrocComponent } from './croc/croc.component';
import { KekComponent } from './kek/kek.component';



@NgModule({
  declarations: [
    AppComponent,
    AnimationComponent,
    NavbarComponent,
    WelcomeComponent,
    DonaldComponent,
    CrocComponent,
    KekComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
