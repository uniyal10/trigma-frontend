import { Component, OnInit } from '@angular/core';
import { Vehicles } from './vehicles';
import { VehicleService } from './vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

   // initializing vehicle object

   vehicles:Vehicles[] = [];
   add:boolean = false;
   vehicle:Vehicles = {
     _id:null,
     make:"",
     model:"",
     year:null
   };
   
  constructor(private  vehicleService:VehicleService){}
  ngOnInit(){
     this.getVehicles();
  }
  isAdd(isAdd:boolean):void{
   this.add = isAdd;
   this.vehicle = {
    _id:null,
    make:"",
    model:"",
    year:null
  };
  }
  isEdit(isAdd:boolean,vehicle:Vehicles):void{
      this.add = isAdd;
      this.vehicle = vehicle;
  }

  getVehicles():void{
    this.vehicleService.getVehicles().subscribe(vehicles=>this.vehicles = vehicles);
  }

  addVehicle(id?:string):void{
    if(id){
      this.vehicleService.updateVehicle(this.vehicle,id).subscribe(msg=>console.log(msg));
    }
    else{
    this.vehicleService.addVehicles(this.vehicle).subscribe(msg=>this.vehicles.push(this.vehicle));
    }
    this.add = false;
  }

  onDelete(id:string):void{
    this.vehicleService.deleteVehicle(id).subscribe(msg=>this.vehicles = this.vehicles.filter(vehicle=>vehicle._id != id));
    
  }


}
