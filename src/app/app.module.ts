import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialComponent } from './social/social.component';
import { LogoComponent } from './logo/logo.component';
import { SkillsComponent } from './skills/skills.component';
import { TuskComponent } from './tusk/tusk.component';
import { TeenaComponent } from './teena/teena.component';
import { PicoComponent } from './pico/pico.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialComponent,
    LogoComponent,
    SkillsComponent,
    TuskComponent,
    TeenaComponent,
    PicoComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
