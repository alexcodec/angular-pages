import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NavbarModule } from './@components/navbar/navbar.module';
import { HeaderModule } from './@components/header/header.module';
import { HeroModule } from './@components/hero/hero.module';
import { AboutModule } from './@components/about/about.module';
import { ServiceModule } from './@components/service/service.module';
import { PortfolioModule } from './@components/portfolio/portfolio.module';
import { TeamModule } from './@components/team/team.module';
import { CallModule } from './@components/call/call.module';
import { FooterModule } from './@components/footer/footer.module';
import { CopyrightModule } from './@components/copyright/copyright.module';
import { ProgrammingModule } from './@components/programming/programming.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    NavbarModule,
    HeroModule,
    AboutModule,
    ServiceModule,
    ProgrammingModule,
    PortfolioModule,
    TeamModule,
    CallModule,
    FooterModule,
    CopyrightModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
