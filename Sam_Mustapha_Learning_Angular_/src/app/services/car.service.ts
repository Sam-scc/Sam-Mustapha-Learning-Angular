import { Injectable } from '@angular/core';
import { catchError, Observable, of,throwError } from 'rxjs';
import { Cars } from '../Shared/Model/cars';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { cars } from '../Shared/Model/mockCar';





@Injectable({
  providedIn: 'root'
})
export class CarService {
  private apiUrl = 'api/cars';  
  private cars: Cars[] = []
  constructor(private http: HttpClient) { }

  // Get all cars
  getCars(): Observable<Cars[]> {
    return this.http.get<Cars[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  addCar(car: Cars): Observable<Cars> {
    car.id = this.generateNewId();
    return this.http.post<Cars>(this.apiUrl, car).pipe(catchError(this.handleError))
  }


  updateCar(car: Cars): Observable<Cars> {
    const url = `${this.apiUrl}/${car.id}`;
    return this.http.put<Cars>(url, car).pipe(catchError(this.handleError))
  }


  deleteCar(carsId: number): Observable<{}> {
    const url = `${this.apiUrl}/${carsId}`;
    return this.http.delete(url).pipe(catchError(this.handleError))

  }

  getCarById(carsId: number): Observable<Cars | null> {
    const url = `${this.apiUrl}/${carsId}`;
    return this.http.get<Cars>(url).pipe(catchError(this.handleError));
  }

  generateNewId(): number{
    return this.cars.length > 0 ? Math.max(...this.cars.map(cars =>cars.id)) + 1 : 1;
  }
  
  private handleError(error: HttpErrorResponse){
    console.error('API error:' , error);
    return throwError(() => new Error('Server error, please try again'));
  
  }

}

