import { DatePipe } from "@angular/common";

export class Appointment {
 
      bookingId : number = 0;
      mobileNo!: number ;
      dateOfBooking!: DatePipe;
      slot : string ="";
      centerCode : number = 0;
      memberIdCard : number = 0; 
     
}