import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/model/vaccine-appointment/appointment';
import { AppointmentService } from 'src/app/service/vaccine-appointment/appointment.service';



@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit {

  bookingId: number = 0 ;
  appointment: Appointment = new Appointment();

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

  list(){
    this.router.navigate(['appointment']);
  }

}
