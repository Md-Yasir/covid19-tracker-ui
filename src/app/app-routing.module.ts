import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PassComponent } from './RegPass/pass.component';
import { HomeComponent } from './home/home.component';
import { ViewpassComponent } from './viewpass/viewpass.component';
import { DocAppointmentComponent } from './doc-appointment/doc-appointment.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { HealthcareComponent } from './healthcare/healthcare.component';
import { FreefoodComponent } from './freefood/freefood.component';
import { ViewdocappointmentsComponent } from './viewdocappointments/viewdocappointments.component';
import { OnlinecoursesComponent } from './onlinecourses/onlinecourses.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { RegVolComponent } from './RegVol/reg-vol.component';
import { AboutComponent } from './about/about.component';
import { ViewvolComponent } from './viewvol/viewvol.component';
import { HelplineComponent } from './helpline/helpline.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'services/addpass', component: PassComponent},
  {path: 'services/helpline', component: HelplineComponent},
  {path: 'home', component: HomeComponent},
  {path: 'adminpanel/viewpass', component: ViewpassComponent},
  {path: 'adminpanel/viewvol', component: ViewvolComponent},
  {path: 'services/fixappointment', component: DocAppointmentComponent},
  {path: 'adminpanel/viewappointments', component: ViewdocappointmentsComponent},
  {path: 'services', component: OurservicesComponent},
  {path: 'services/healthcare', component: HealthcareComponent},
  {path: 'services/freefood', component: FreefoodComponent},
  {path: 'services/onlinecourses', component: OnlinecoursesComponent},
  {path: 'login', component: LoginpageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'services/volreg', component: RegVolComponent},
  {path: 'adminpanel', component: AdminpanelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
