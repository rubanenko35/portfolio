import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CommonModule } from '@angular/common';
import { AppRoutingRoutes } from './app-routing.routes';
import { AppService } from './app-service.service';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRoutingRoutes
  ],
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    MainComponent,
    PortfolioComponent
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
