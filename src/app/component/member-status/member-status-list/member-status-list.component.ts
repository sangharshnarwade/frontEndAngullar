import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MemberStatus } from 'src/app/model/member-status/member-status';
import { MemberStatusService } from 'src/app/service/member-status/member-status.service';


@Component({
  selector: 'app-member-status-list',
  templateUrl: './member-status-list.component.html',
  styleUrls: ['./member-status-list.component.css']
})
export class MemberStatusListComponent implements OnInit {

   membersStatus!: Observable<MemberStatus[]>;

  constructor(private memberStatusServie : MemberStatusService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.membersStatus = this.memberStatusServie.getMemberStatusList();
  }

  deleteMemberStatus(id : number) {
    this.memberStatusServie.deleteMemberStatus(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateMemberStatus(id: number) {
    this.router.navigate(['update', id]);
  }

  memberStatusDetails(id: number){
    this.router.navigate(['details', id]);
  }

}