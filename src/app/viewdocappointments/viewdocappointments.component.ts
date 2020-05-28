import { Component, OnInit } from '@angular/core';
import { CovidserviceService } from '../covidservice.service';

@Component({
  selector: 'app-viewdocappointments',
  templateUrl: './viewdocappointments.component.html',
  styleUrls: ['./viewdocappointments.component.css']
})
export class ViewdocappointmentsComponent implements OnInit {

  appointments: any

  constructor(private service: CovidserviceService) { }

  ngOnInit(){

    let response = this.service.getAppointments();
    response.subscribe((data)=> this.appointments = data);
  }

  public appointmentdone(id: number){
    let response = this.service.appointmentdone(id);
    response.subscribe((data) => this.appointments = data)
  }

}
