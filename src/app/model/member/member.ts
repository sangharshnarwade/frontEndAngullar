import { DatePipe } from "@angular/common";

export class Member
 {
    idCard :number = 0;
    name :string = "";
    dob !:DatePipe;
    gender :string = "";
    city :string = "";
    state :string = "";
    adharNo :number = 0;
  
}
