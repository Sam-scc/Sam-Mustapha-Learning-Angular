import { Component, OnInit } from '@angular/core';
import { Cars } from '../Shared/Model/cars';
import { NgClass, NgForOf } from '@angular/common';
import { CarListItemComponent } from '../car-list-item/car-list-item.component';
import { CarService } from '../services/car.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, UpperCasePipe, LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [NgClass, NgForOf, CarListItemComponent, RouterLink, FormsModule,CurrencyPipe, UpperCasePipe, LowerCasePipe],
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {
  cars: Cars[] = [];
  error: string | null = null;  
  constructor(private carService: CarService, private router: Router) {}

  ngOnInit(): void {

    this.carService.getCars().subscribe({
      next: (data: Cars[]) => {
        this.cars = data; 
        this.error = null; 
      },
      error: (err) => {
        this.error = 'Error fetching cars';  
        console.error('Error fetching cars:', err);
      }
    });
  }

  selectedCarItem?: Cars;


  selectedCar(car: Cars): void {
    this.selectedCarItem = car;
  }

  onEdit(): void {
    this.router.navigate(['/modify-car']);
  }

  onDelete(car: Cars): void {
    this.carService.deleteCar(car.id).subscribe({
      next: () => {
        this.cars = this.cars.filter((c) => c.id !== car.id);  
      },
      error: (err) => {
        this.error = 'Failed to delete the car';
        console.error('Error deleting car:', err);
      }
    });
  }
}

