import { Component, OnInit } from '@angular/core';
import { Cars } from '../Shared/Model/cars';
import {NgClass, NgForOf} from '@angular/common';
import { CarListItemComponent } from '../car-list-item/car-list-item.component';
import { CarService } from '../services/car.service';
import { NgOptimizedImage } from '@angular/common'
import {Router, RouterLink} from "@angular/router";
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [NgClass, NgForOf, CarListItemComponent,NgOptimizedImage, RouterLink, FormsModule],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.scss'
})
export class CarListComponent implements OnInit{
  // dispaly: String [] = ['id', 'name', 'price', 'model','image'];
  cars: Cars[] =[];
 
  constructor(private carService: CarService,private router: Router){

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

  onEdit(): void{
    this.router.navigate(['/modify-car'])
  }
  onDelete(car: Cars): void {
 this.carService.deleteCar(car.id).subscribe(() =>{
  this.cars=this.cars.filter(c => c.id !== car.id)
 })
  }





}
