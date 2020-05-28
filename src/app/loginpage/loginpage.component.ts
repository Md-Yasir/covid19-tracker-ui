import { Component, OnInit } from '@angular/core';
import { CovidserviceService } from '../covidservice.service';
import { Router, } from '@angular/router';
import { error } from 'protractor';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  username: string;
  password: string;
  responsemessage: any;

  constructor(private service: CovidserviceService, private router: Router) { }

  ngOnInit() {
  }

  doLogin() {
    let response = this.service.login(this.username, this.password);
    response.subscribe((data) => {
      this.router.navigate(['/adminpanel']);
    },
      (error) => console.log(this.responsemessage)
    );
  }
}
