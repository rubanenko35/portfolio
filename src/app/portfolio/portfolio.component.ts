import { Component, OnInit } from '@angular/core';
import { AppService } from '../app-service.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  data;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getData('./assets/data/portfolio.json')
      .subscribe( (data) => {
        this.data = data;
      })
  }

}
