import { Component, OnInit } from '@angular/core';
import { CovidserviceService } from '../covidservice.service';

@Component({
  selector: 'app-demomap',
  templateUrl: './demomap.component.html',
  styleUrls: ['./demomap.component.css']
})
export class DemomapComponent implements OnInit {

  lat: string = '';
  log: string = '';
  
  location: object;

  constructor(private map: CovidserviceService) { }

  ngOnInit(): void {

    this.map.getLocation().subscribe(data=> {
      console.log(data);
      this.lat = data.latitude;
      this.log = data.longitude;
    })

  }

}
