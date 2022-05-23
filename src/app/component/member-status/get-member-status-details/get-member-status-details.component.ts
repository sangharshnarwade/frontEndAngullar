import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberStatus } from 'src/app/model/member-status/member-status';
import { MemberStatusService } from 'src/app/service/member-status/member-status.service';


@Component({
  selector: 'app-get-member-status-details',
  templateUrl: './get-member-status-details.component.html',
  styleUrls: ['./get-member-status-details.component.css']
})
export class GetMemberStatusDetailsComponent implements OnInit {

  id: number = 0 ;
  memberStatus : MemberStatus = new MemberStatus();

  constructor(private route: ActivatedRoute,private router: Router,
    private memberStatusService: MemberStatusService) { }

  ngOnInit() {

    this.memberStatus = new MemberStatus();
    this.id = this.route.snapshot.params['id'];

/* 
route.snapshot - Contains the information about a route associated with a component loaded in an outlet at a particular moment in time
*/

    
    this.memberStatusService.getMemberStatus(this.id)
      .subscribe(data => {
        console.log(data)
        this.memberStatus = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['member-status-list']);
  }

}

