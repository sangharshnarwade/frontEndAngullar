
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { UpdateAppointmentComponent } from './component/Vaccine-Appointment/update-appointment/update-appointment.component';
import { AddVaccineRegistrationComponent } from './component/vaccine-registration/add-vaccine-registration/add-vaccine-registration.component';
import { CreateVaccineComponent } from './component/vaccine/create-vaccine/create-vaccine.component';
import { UpdateVaccineComponent } from './component/vaccine/update-vaccine/update-vaccine.component';
import { VaccineDetailsComponent } from './component/vaccine/vaccine-details/vaccine-details.component';
import { VaccineSearchComponent } from './component/vaccine/vaccine-search/vaccine-search.component';
import { VaccineViewComponent } from './component/vaccine/vaccine-view/vaccine-view.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateMemberComponent,
    MemberDetailsComponent,
    MemberListComponent,
    UpdateMemberComponent,
    AddMemberStatusComponent,
    GetMemberStatusDetailsComponent,
    MemberStatusListComponent,
    UpdateMemberStatusComponent,
    CreateVaccinecenterComponent ,
    DetailsVaccinecenterComponent,
    ListVaccinecenterComponent,
    UpdateVaccinecenterComponent,
    CreateVaccineComponent,
    UpdateVaccineComponent,
    VaccineDetailsComponent,
    VaccineSearchComponent,
    VaccineViewComponent,
    AppointmentDetailsComponent,
    AppointmentListComponent,
    CreateAppointmentComponent,
    UpdateAppointmentComponent,
    AddVaccineRegistrationComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
   HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
