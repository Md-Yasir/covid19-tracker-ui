import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable, observable} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { error } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class CovidserviceService {

  //Online Server
  // private BASE_URL = "http://covid19-tracker.cloudjiffy.net";

  //Heroku Server
  private BASE_URL = "https://covid19tracker-telangana.herokuapp.com";

  //Local Server
  // private BASE_URL = "http://localhost:8080";

  private PASS_REGISTRATION = this.BASE_URL + '/pass/addpass';
  private VIEW_PASS_URL = this.BASE_URL + '/pass/viewpass';
  private ISSUED_PASS = this.BASE_URL + '/pass/passissued/';
  private VOLUNTEER_REGISTRATION = this.BASE_URL + '/vol/addvol';
  private VIEW_VOLUNTEER_URL = this.BASE_URL + '/vol/viewvol';
  private VIEW_DOCTOR_APPOINTMENTS = this.BASE_URL + '/doctor/viewappointments';
  private FIX_APPOINTMENT = this.BASE_URL + '/doctor/fixappointment';
  private APPOINTMENT_COMPLETED = this.BASE_URL + '/doctor/appointmentdone';
  private VIEW_USERS = this.BASE_URL + '/viewusers';
  private ADMIN = this.BASE_URL + '/admin';



  constructor(private http: HttpClient) { }


  //PASS SERVICES

  public passRegistration(pass) {

    return this.http.post(this.PASS_REGISTRATION, pass, { responseType: 'text' as 'json' });

  }

  public getPasses() {

    return this.http.get(this.VIEW_PASS_URL);
  }

  public passIssued(id) {
    return this.http.delete(this.ISSUED_PASS + id);
  }

  //VOLUNTEER SERVICES

  public volRegistration(volunteers) {

    return this.http.post(this.VOLUNTEER_REGISTRATION, volunteers, { responseType: 'text' as 'json' });

  }

  public getVolunteers() {

    return this.http.get(this.VIEW_VOLUNTEER_URL);
  }


  //APPOINTMENT SERVICES

  public getAppointments() {

    return this.http.get(this.VIEW_DOCTOR_APPOINTMENTS);
  }


  public fixdocappointment(fixappointment) {
    return this.http.post(this.FIX_APPOINTMENT, fixappointment, { responseType: 'text' as 'json' })
  }


  public appointmentdone(id) {
    return this.http.delete(this.APPOINTMENT_COMPLETED + id);
  }


  //COVID API SERVICES

  public getCaseReport() {
    return this.http.get('https://api.covid19india.org/data.json');

  }

  public getEssentialResource() {
    return this.http.get('https://api.covid19india.org/resources/resources.json');
  }

  public login(username: string, password: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(username + ':' + password)
      })
    };

    return this.http.get<any>(this.ADMIN, httpOptions)
    .pipe(catchError(this.errorHandler))
  }

  errorHandler(error){
    return throwError(error.messsage || "Server Error")
  }
}
