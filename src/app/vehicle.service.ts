import { Injectable } from '@angular/core';
import { Vehicles } from './vehicles';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  httpOptions = {
    headers:new HttpHeaders({'Content-Type':'application/json'})
  };
  constructor(private http:HttpClient) { }

  getVehicles():Observable<Vehicles[]>{
      const url = "http://localhost:3000/home"
      return this.http.get<Vehicles[]>(url);
  }

  addVehicles(vehicle:Vehicles){
     const url = "http://localhost:3000/add"
     return this.http.post<{}>(url,vehicle, this.httpOptions);
  }

  updateVehicle(vehicle:Vehicles,id?:string){
    const url = `http://localhost:3000/update/${id}`
    return this.http.patch(url,vehicle,this.httpOptions);
  }

  deleteVehicle(id:string){
    const url = `http://localhost:3000/delete/${id}`;
    return this.http.delete(url);
  }
}
