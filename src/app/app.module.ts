import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PassComponent } from './RegPass/pass.component';
import { ViewpassComponent } from './viewpass/viewpass.component';
import { DocAppointmentComponent } from './doc-appointment/doc-appointment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewdocappointmentsComponent } from './viewdocappointments/viewdocappointments.component';
import { CustomPipe } from './custom.pipe';
import { NavibarComponent } from './navibar/navibar.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { HealthcareComponent } from './healthcare/healthcare.component';
import { FreefoodComponent } from './freefood/freefood.component';
import { FoodserviceComponent } from './foodservice/foodservice.component';
import { OnlinecoursesComponent } from './onlinecourses/onlinecourses.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import{ CovidserviceService } from './covidservice.service';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { RegVolComponent } from './RegVol/reg-vol.component';
import { AboutComponent } from './about/about.component';
import { ViewvolComponent } from './viewvol/viewvol.component';
import { HelplineComponent} from './helpline/helpline.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PassComponent,
    ViewpassComponent,
    DocAppointmentComponent,
    DocAppointmentComponent,
    ViewdocappointmentsComponent,
    CustomPipe,
    NavibarComponent,
    OurservicesComponent,
    HealthcareComponent,
    FreefoodComponent,
    FoodserviceComponent,
    OnlinecoursesComponent,
    LoginpageComponent,
    AdminpanelComponent,
    RegVolComponent,
    AboutComponent,
    ViewvolComponent,
    HelplineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
    
  ],
  providers: [CovidserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
