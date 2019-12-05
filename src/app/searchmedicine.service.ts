import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchmedicineService {
  private baseUrl = 'http://localhost:15415//api';

  constructor(private http: HttpClient) { }

  getMedicineList(): Observable<any> {
    return this.http.get(this.baseUrl + '/Medicine');
  }

  getMedicine(id: number):Observable<any>
  {
    return this.http.get(this.baseUrl+'/Medicine'+id);
  }
  searchMedicine(name:string): Observable<any>{
    return this.http.get(this.baseUrl+'/Medicine?name=' + name);
  }
  
  

  
}
