import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VaccinationCenter } from 'src/app/model/vaccination-center/vaccinationcenter';
import { VaccinationcenterService } from 'src/app/service/vaccination-center/vaccinationcenter.service';


@Component({
  selector: 'app-details-vaccinecenter',
  templateUrl: './details-vaccinecenter.component.html',
  styleUrls: ['./details-vaccinecenter.component.css']
})
export class DetailsVaccinecenterComponent implements OnInit {

  code : number = 0;
  center : VaccinationCenter = new VaccinationCenter;
  constructor(private route : ActivatedRoute, private router :Router,
    private centerService : VaccinationcenterService) { }

  ngOnInit(): void {

    this.center = new VaccinationCenter();
    this.code = this.route.snapshot.params['code'];
/* 
route.snapshot - Contains the information about a route associated with a component loaded in an outlet at a particular moment in time
*/
    
    this.centerService.getVaccineCenter(this.code)
      .subscribe(data => {
        console.log(data)
        this.center = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['vaccinecenters']);
  }

}
