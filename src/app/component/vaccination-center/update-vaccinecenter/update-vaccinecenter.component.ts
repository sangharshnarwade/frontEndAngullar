import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VaccinationCenter } from 'src/app/model/vaccination-center/vaccinationcenter';
import { VaccinationcenterService } from 'src/app/service/vaccination-center/vaccinationcenter.service';


@Component({
  selector: 'app-update-vaccinecenter',
  templateUrl: './update-vaccinecenter.component.html',
  styleUrls: ['./update-vaccinecenter.component.css']
})
export class UpdateVaccinecenterComponent implements OnInit {
  code : number = 0;
  center : VaccinationCenter = new VaccinationCenter();
  submitted = false;

  constructor(private route : ActivatedRoute, private router : Router,
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

  updateVaccineCenter() {
    this.centerService.updateVaccineCenter(this.code, this.center)
      .subscribe(data => {
        console.log(data);
        this.center = new VaccinationCenter();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.updateVaccineCenter();    
  }

  gotoList() {
    this.router.navigate(['/vaccinecenters']);
  }

}
