import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cars } from '../Shared/Model/cars';
import { cars } from '../Shared/Model/mockCar';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }
  getCars(): Observable<Cars[]>{
    return of (cars)

  }
    
  
}
