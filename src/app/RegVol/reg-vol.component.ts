import { Component, OnInit } from '@angular/core';
import { CovidserviceService } from '../covidservice.service';
import { VolEntity } from '../CovidEntity';

@Component({
  selector: 'app-reg-vol',
  templateUrl: './reg-vol.component.html',
  styleUrls: ['./reg-vol.component.css']
})
export class RegVolComponent implements OnInit {

  volunteer: VolEntity = new VolEntity('', 0, 0, '', '', 0, '', '', 0);
  message: any;

  constructor(private service: CovidserviceService ) { }

  ngOnInit(): void {
  }

  public submitVolForm() {

    let response = this.service.volRegistration(this.volunteer);
    response.subscribe((data)=>this.message = data);
     }

}
