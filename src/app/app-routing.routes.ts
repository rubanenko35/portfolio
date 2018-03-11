import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/main', pathMatch: 'full' },
      { path: 'main', component: MainComponent },
      { path: 'portfolio', component: PortfolioComponent },
    ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingRoutes {
}
