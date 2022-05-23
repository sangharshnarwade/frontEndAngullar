import { DatePipe } from "@angular/common";

export class MemberStatus { 
      memberId : number = 0
      dose1status : Boolean = false
	dose2status : Boolean = false
      dose1date! : DatePipe
	dose2date! : DatePipe
	memberIdCard : number = 0
     mobileRegNo : number = 0
     vaccineId : number = 0;
}