import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberStatus } from 'src/app/model/member-status/member-status';
import { MemberStatusService } from 'src/app/service/member-status/member-status.service';


@Component({
  selector: 'app-add-member-status',
  templateUrl: './add-member-status.component.html',
  styleUrls: ['./add-member-status.component.css']
})
export class AddMemberStatusComponent implements OnInit {
  memberStatus : MemberStatus = new MemberStatus();
  submitted = false;
  constructor(private memberStatusService : MemberStatusService, private router : Router) { }

  ngOnInit(): void {
  }
  newMemberStatus(): void {
    this.submitted = false;
    this.memberStatus = new MemberStatus();
  }
  save() {
    this.memberStatusService.addMemberStatus(this.memberStatus).subscribe(data => {
      console.log(data)
      this.memberStatus = new MemberStatus();
       this.gotoList();
    }, 
    error => console.log(error));
  }
  gotoList() {
    return this.router.navigate(['member-status-list']);
  }
  onSubmit() {
    this.submitted = true;
    this.save();    
  }
}
