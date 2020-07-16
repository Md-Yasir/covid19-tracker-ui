import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public maps: any = { lat: 12.957438, lng: 80.181116 };


  constructor() { }

  ngOnInit(): void {
  }

}
