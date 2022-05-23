import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Appointment } from 'src/app/model/vaccine-appointment/appointment';
import { AppointmentService } from 'src/app/service/vaccine-appointment/appointment.service';


@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  appointment!: Observable<Appointment[]>;

  constructor(private appointmentService: AppointmentService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.appointment = this.appointmentService.getAppointmentList();
  }

  deleteAppointment(bookingId: number) {
    this.appointmentService.deleteAppointment(bookingId)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateAppointment(bookingId: number) {
    this.router.navigate(['update', bookingId]);
  }

  appointmentDetails(bookingId: number){
    this.router.navigate(['details', bookingId]);
  }

  

}
