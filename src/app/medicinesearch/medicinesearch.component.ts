import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Searchmedicine } from '../searchmedicine';
import { SearchmedicineService } from '../searchmedicine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicinesearch',
  templateUrl: './medicinesearch.component.html',
  styleUrls: ['./medicinesearch.component.scss']
})
export class MedicinesearchComponent implements OnInit {

  medicine:Observable<Searchmedicine[]>
  
  medicines:Observable<Searchmedicine[]>
  
  

  constructor(private SearchmedicineService: SearchmedicineService ,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.medicine = this.SearchmedicineService.getMedicineList();
    this.medicines = this.SearchmedicineService.getMedicineList();
}
search(medName:string){

  if(medName==""||medName==null)
  {
    this.medicines=this.SearchmedicineService.getMedicineList();
  }
  else{
    this.medicines=this.SearchmedicineService.searchMedicine(medName);
  }
}
}

