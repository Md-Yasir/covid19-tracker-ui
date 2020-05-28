import { Component, OnInit } from '@angular/core';
import { CovidserviceService } from '../covidservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewpass',
  templateUrl: './viewpass.component.html',
  styleUrls: ['./viewpass.component.css']
})
export class ViewpassComponent implements OnInit {

  passes: any;

  constructor(private service: CovidserviceService, private router: Router) { }

  ngOnInit() {

    let response = this.service.getPasses();
    response.subscribe((data) => this.passes = data);

  }

  public passissued(id: number) {

    let response = this.service.passIssued(id);             //to delete issued pass by selected id and return the passes
    response.subscribe((data) => this.passes = data);

  }
}
