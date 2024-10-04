import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cars } from '../Shared/Model/cars';
import { cars } from '../Shared/Model/mockCar';


@Injectable({
  providedIn: 'root'
})
export class CarService {
  private car: Cars[] = cars;

  constructor() { }


  getCars(): Observable<Cars[]>{
    return of (cars)

  }

  addCar(newCar:Cars): Observable<Cars[]>{
    this.car.push(newCar)
    return of (this.car);
  }

  updateCar(updateCar: Cars): Observable<Cars[]>{
    const index = this.car.findIndex(cars => cars.id === updateCar.id);
    if(index !== -1){
      this.car[index] = updateCar;
    }


    return of (this.car);
  }

  deleteCar(carsId: number):  Observable<Cars[]>{
    this.car = this.car.filter(cars => cars.id !== carsId)
    return of (this.car)
  }

  getCarById(carsId: number):  Observable<Cars[]>{
    const car = this.car.find(cars => cars.id === carsId)
    return of ();
  }

  
  
    
  
}
