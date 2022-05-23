import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/model/vaccine-appointment/appointment';
import { AppointmentService } from 'src/app/service/vaccine-appointment/appointment.service';


@Component({
  selector: 'app-update-appointment',
  templateUrl: './update-appointment.component.html',
  styleUrls: ['./update-appointment.component.css']
})
export class UpdateAppointmentComponent implements OnInit {

  bookingId: number = 0;
  appointment: Appointment = new Appointment();
  submitted = false;

  constructor(private route: ActivatedRoute,private router: Router,
    private appointmentService: AppointmentService) { }

  ngOnInit() {

    this.appointment = new Appointment();

    this.bookingId = this.route.snapshot.params['bookingId'];

/* 
route.snapshot - Contains the information about a route associated with a component loaded in an outlet at a particular moment in time
*/
    
    this.appointmentService.getAppointment(this.bookingId)
      .subscribe(data => {
        console.log(data)
        this.appointment = data;
      }, error => console.log(error));
  }

  updateAppointment() {
    this.appointmentService.updateAppointment(this.bookingId, this.appointment)
      .subscribe(data => {
        console.log(data);
        this.appointment = new Appointment();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.updateAppointment();    
  }

  gotoList() {
    this.router.navigate(['/appointment']);
  }

}
