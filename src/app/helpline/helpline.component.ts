import { Component, OnInit } from '@angular/core';
import { CovidserviceService } from '../covidservice.service';

@Component({
  selector: 'app-helpline',
  templateUrl: './helpline.component.html',
  styleUrls: ['./helpline.component.css']
})
export class HelplineComponent implements OnInit {

  details: any;

  constructor(private service: CovidserviceService) { }

  ngOnInit(): void {

    let response = this.service.getEssentialResource();
    response.subscribe((data) => this.details = [data]);

  }

}
