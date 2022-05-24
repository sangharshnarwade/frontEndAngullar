import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Member } from 'src/app/model/member/member';
import { MemberService } from 'src/app/service/member/member.service';


@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  members !: Observable<Member[]>;
  constructor(private memberService : MemberService, private router : Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.members = this.memberService.getMemberList();
  } 

  // deleteMember (idCard : number){
  //   this.memberService.deleteMember(idCard).subscribe(data => {
  //     console.log (data );
  //     this.reloadData();
  //   },
  //   error => console.log(error))
  // }

  updateMember(id: number) {
    this.router.navigate(['update', id]);
  }


  memberDetails(id: number){
    this.router.navigate(['details', id]);
  }
bookAppointment() {
  this.router.navigate(['/new-appointment']);
}
  }


  
 
