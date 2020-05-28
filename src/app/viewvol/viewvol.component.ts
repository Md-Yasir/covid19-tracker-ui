import { Component, OnInit } from '@angular/core';
import { CovidserviceService } from '../covidservice.service';

@Component({
  selector: 'app-viewvol',
  templateUrl: './viewvol.component.html',
  styleUrls: ['./viewvol.component.css']
})
export class ViewvolComponent implements OnInit {

  volunteers: any;

  constructor(private service: CovidserviceService) { }

  ngOnInit(){

    let response = this.service.getPasses();
    response.subscribe((data)=> this.volunteers = data);

  }

}
