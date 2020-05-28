import { Component, OnInit } from '@angular/core';
import { CovidserviceService } from '../covidservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cases: any;

  constructor(private service: CovidserviceService) { }

  ngOnInit(): void {

    let response = this.service.getCaseReport();
    response.subscribe((data) => this.cases = [data]);
    }

}
