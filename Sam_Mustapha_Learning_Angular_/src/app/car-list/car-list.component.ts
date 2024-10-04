import { Component, OnInit } from '@angular/core';
import { Cars } from '../Shared/Model/cars';
import {NgClass, NgForOf} from '@angular/common';
import { CarListItemComponent } from '../car-list-item/car-list-item.component';
import { CarService } from '../services/car.service';


@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [NgClass, NgForOf, CarListItemComponent],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.scss'
})
export class CarListComponent implements OnInit{
  dispaly: String [] = ['id', 'name', 'price', 'model'];
  cars: Cars[] =[];
  constructor(private carService: CarService){

  }

  ngOnInit() {
      this.carService.getCars().subscribe({
        next: (data: Cars[])=> this.cars = data,
        error:err => console.error("error finding car", err),
        complete:() => console.log("finding conmpleted")
      })
  }

  selectedCarItem?: Cars;
  selectedCar(car : Cars): void{
    this.selectedCarItem = car
  }
  



}
