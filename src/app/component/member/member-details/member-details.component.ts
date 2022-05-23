import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/app/model/member/member';
import { MemberService } from 'src/app/service/member/member.service';


@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {


  id : number = 0;
  member : Member = new Member();

  constructor(private route : ActivatedRoute , private router : Router ,
    private memberService : MemberService) { }

  ngOnInit(): void {
    this.member = new Member();
    this.id  = this.route.snapshot.params['id'];
    this.memberService.getMemberById(this.id ).subscribe(data => {
      console.log(data) ;
      this.id = data;
    },
    error => console.log(error))
  };

  list() {
    this.router.navigate(['/member-list']);
  }
  

}
