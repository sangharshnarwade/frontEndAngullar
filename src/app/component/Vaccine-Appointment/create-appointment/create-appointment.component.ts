import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/model/vaccine-appointment/appointment';
import { AppointmentService } from 'src/app/service/vaccine-appointment/appointment.service';


@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {
 
  appointment: Appointment = new Appointment();
  submitted = false;

  constructor(private appointmentService: AppointmentService,  private router: Router ){
  
  }

  ngOnInit() {
    
  }

  newAppointment(): void {
    this.submitted = false;
    this.appointment = new Appointment();
  }

  save() {
    this.appointmentService.createAppointment(this.appointment).subscribe(data => {
      console.log(data)
      this.appointment = new Appointment();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/appointment']);
  }


}
