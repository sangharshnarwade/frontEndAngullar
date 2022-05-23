import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMemberStatusComponent } from './component/member-status/add-member-status/add-member-status.component';
import { GetMemberStatusDetailsComponent } from './component/member-status/get-member-status-details/get-member-status-details.component';
import { MemberStatusListComponent } from './component/member-status/member-status-list/member-status-list.component';
import { UpdateMemberStatusComponent } from './component/member-status/update-member-status/update-member-status.component';
import { CreateMemberComponent } from './component/member/create-member/create-member.component';
import { MemberDetailsComponent } from './component/member/member-details/member-details.component';
import { MemberListComponent } from './component/member/member-list/member-list.component';
import { UpdateMemberComponent } from './component/member/update-member/update-member.component';
import { CreateVaccinecenterComponent } from './component/vaccination-center/create-vaccinecenter/create-vaccinecenter.component';
import { DetailsVaccinecenterComponent } from './component/vaccination-center/details-vaccinecenter/details-vaccinecenter.component';
import { ListVaccinecenterComponent } from './component/vaccination-center/list-vaccinecenter/list-vaccinecenter.component';
import { UpdateVaccinecenterComponent } from './component/vaccination-center/update-vaccinecenter/update-vaccinecenter.component';
import { AppointmentDetailsComponent } from './component/Vaccine-Appointment/appointment-details/appointment-details.component';
import { AppointmentListComponent } from './component/Vaccine-Appointment/appointment-list/appointment-list.component';
import { CreateAppointmentComponent } from './component/Vaccine-Appointment/create-appointment/create-appointment.component';
import { AddVaccineRegistrationComponent } from './component/vaccine-registration/add-vaccine-registration/add-vaccine-registration.component';
import { CreateVaccineComponent } from './component/vaccine/create-vaccine/create-vaccine.component';
import { UpdateVaccineComponent } from './component/vaccine/update-vaccine/update-vaccine.component';
import { VaccineDetailsComponent } from './component/vaccine/vaccine-details/vaccine-details.component';
import { VaccineSearchComponent } from './component/vaccine/vaccine-search/vaccine-search.component';
import { VaccineViewComponent } from './component/vaccine/vaccine-view/vaccine-view.component';

const routes: Routes = [
  
//vaccine registration 
  { path: '', redirectTo: 'user-login', pathMatch: 'full' },
  {path: 'user-login', component: AddVaccineRegistrationComponent},

   //member

  //  { path: '', redirectTo: 'member-list', pathMatch: 'full' },
   {path : 'new-member/:mobileNo' , component : CreateMemberComponent},
   {path : 'member-list', component : MemberListComponent},
   {path : 'update/:id', component : UpdateMemberComponent},
   {path : 'details/:id', component : MemberDetailsComponent},
   
   //member-status
    
   { path: '', redirectTo: 'member-status-list', pathMatch: 'full'},
   {path : 'new', component : AddMemberStatusComponent},
   { path: 'member-status-list', component: MemberStatusListComponent },
   { path: 'update/:id', component: UpdateMemberStatusComponent },
   { path: 'details/:id', component: GetMemberStatusDetailsComponent},
  
   //vaccine routing

  { path: '', redirectTo: 'VaccineDetails', pathMatch: 'full' },
  { path: 'VaccineDetails', component: VaccineDetailsComponent},
  { path: 'viewAll', component: VaccineViewComponent},
  { path: 'add', component: CreateVaccineComponent},
  { path: 'search/:vaccineName', component: VaccineSearchComponent},
  { path: 'update/:id', component: UpdateVaccineComponent},

 //vaccine appointment

  // { path: '', redirectTo: 'appointment', pathMatch: 'full' },
  { path: 'appointment', component: AppointmentListComponent },
  { path: 'new', component: CreateAppointmentComponent },
  { path: 'update/:bookingId', component: CreateAppointmentComponent },
  { path: 'details/:bookingId', component: AppointmentDetailsComponent },
  
  //vaccination center 
  
  // { path: '', redirectTo: 'vaccinecenters', pathMatch: 'full' },
  { path: 'vaccinecenters', component: ListVaccinecenterComponent },
  { path: 'add', component: CreateVaccinecenterComponent },
  { path: 'update/:code', component: UpdateVaccinecenterComponent },
  { path: 'details/:code', component: DetailsVaccinecenterComponent }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
