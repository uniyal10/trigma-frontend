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
      const url = "https://trigma.herokuapp.com/home"
      return this.http.get<Vehicles[]>(url);
  }

  addVehicles(vehicle:Vehicles){
     const url = "https://trigma.herokuapp.com/add"
     return this.http.post<{}>(url,vehicle, this.httpOptions);
  }

  updateVehicle(vehicle:Vehicles,id?:string){
    const url = `https://trigma.herokuapp.com/update/${id}`
    return this.http.patch(url,vehicle,this.httpOptions);
  }

  deleteVehicle(id:string){
    const url = `https://trigma.herokuapp.com/delete/${id}`;
    return this.http.delete(url);
  }
}
