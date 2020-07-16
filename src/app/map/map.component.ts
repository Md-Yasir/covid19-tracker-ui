import { Component, OnInit } from '@angular/core';
import { CovidserviceService } from '../covidservice.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  
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
