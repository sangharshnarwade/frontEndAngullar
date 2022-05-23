import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberStatus } from 'src/app/model/member-status/member-status';
import { MemberStatusService } from 'src/app/service/member-status/member-status.service';


@Component({
  selector: 'app-update-member-status',
  templateUrl: './update-member-status.component.html',
  styleUrls: ['./update-member-status.component.css']
})
export class UpdateMemberStatusComponent implements OnInit {

  id: number = 0;
  memberStatus : MemberStatus = new MemberStatus();
  submitted = false;

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

  updateMemberStatus() {
    this.memberStatusService.updateMemberStatus(this.id, this.memberStatus)
      .subscribe(data => {
        console.log(data);
        this.memberStatus = new MemberStatus();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.updateMemberStatus();    
  }

  gotoList() {
    this.router.navigate(['member-status-list']);
  }

}