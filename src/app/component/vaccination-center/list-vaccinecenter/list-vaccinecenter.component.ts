import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { VaccinationCenter } from 'src/app/model/vaccination-center/vaccinationcenter';
import { VaccinationcenterService } from 'src/app/service/vaccination-center/vaccinationcenter.service';


@Component({
  selector: 'app-list-vaccinecenter',
  templateUrl: './list-vaccinecenter.component.html',
  styleUrls: ['./list-vaccinecenter.component.css']
})
export class ListVaccinecenterComponent implements OnInit {
  
  vaccinecenters! : Observable<VaccinationCenter[]>;

  constructor(private centerService : VaccinationcenterService,
    private router : Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
 
  reloadData() {
    this.vaccinecenters = this.centerService.getVaccineCenterList();
  }

  deleteCenter(code: number) {
    this.centerService.deleteVaccineCenter(code)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateVaccineCenter(code : number) {
    this.router.navigate(['update', code]);
  }

  centerDetails (code : number){
    this.router.navigate(['details', code]);
  }

}
