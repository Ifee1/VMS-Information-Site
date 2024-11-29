import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroPageComponent } from './hero-page/hero-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { MngtdashboardComponent } from './mngtdashboard/mngtdashboard.component';
import { KeyFeaturesComponent } from './key-features/key-features.component';
import { BigBoardComponent } from './big-board/big-board.component';
import { FaqComponent } from './faq/faq.component';
import { PricingPageComponent } from './pricing-page/pricing-page.component';
import { TeamPageComponent } from './team-page/team-page.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroPageComponent,
    NavBarComponent,
    BenefitsComponent,
    MngtdashboardComponent,
    KeyFeaturesComponent,
    BigBoardComponent,
    FaqComponent,
    PricingPageComponent,
    TeamPageComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
