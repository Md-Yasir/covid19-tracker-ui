import { Component, OnInit } from '@angular/core';
import { DocEntity } from '../CovidEntity';
import { CovidserviceService } from '../covidservice.service';

@Component({
  selector: 'app-doc-appointment',
  templateUrl: './doc-appointment.component.html',
  styleUrls: ['./doc-appointment.component.css']
})
export class DocAppointmentComponent implements OnInit {

  fixappointment: DocEntity = new DocEntity('', 0, 0, 0, '', 0, 0);
  message: any;

  constructor(private service: CovidserviceService) { }

  ngOnInit(): void {
  }

  public fixAppointment() {

    let response = this.service.fixdocappointment(this.fixappointment);
    response.subscribe((data)=>this.message = (data));
    
  }
}
