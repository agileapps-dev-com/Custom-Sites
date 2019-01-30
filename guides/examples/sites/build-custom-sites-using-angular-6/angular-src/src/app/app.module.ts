import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppUserService } from './app-user.service';
import { HomeModule } from './home/home.module';
import { PricingModule } from './pricing/pricing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    NgbTooltipModule,
    HomeModule,
    PricingModule
  ],
  providers: [AppUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
