import { Component, OnInit, ViewChild } from '@angular/core';
import { Cars } from '../Shared/Model/cars';
import { NgClass, NgForOf } from '@angular/common';
import { CarListItemComponent } from '../car-list-item/car-list-item.component';
import { CarService } from '../services/car.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, UpperCasePipe, LowerCasePipe } from '@angular/common';
import { CarMilesPipe } from '../pipes/car-miles.pipe';
import { HoverHighlightDirective } from '../directives/hover-highlight.directive';
import {
  MatCell,
  MatCellDef, MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow,
  MatHeaderRowDef, MatRow,
  MatRowDef,
  MatTable
} from "@angular/material/table";
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [NgClass, NgForOf, CarListItemComponent, RouterLink, FormsModule,CurrencyPipe, UpperCasePipe, LowerCasePipe,CarMilesPipe,
    HoverHighlightDirective,
    MatTable,
    MatHeaderCellDef,
    MatCellDef,
    MatRowDef,
    MatHeaderRowDef,
    MatHeaderCell,
    MatColumnDef,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatPaginator],
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {
  displayColumns:string[]=['id','carName', 'price','model','isAvailable'];
  cars: Cars[] = [];
  dataSource: MatTableDataSource<Cars> = new MatTableDataSource(this.cars);
  error: string | null = null;  
  constructor(private carService: CarService, private router: Router) {}

  @ViewChild(MatPaginator) paginator: MatPaginator | null=null;

  ngOnInit(): void {

    this.carService.getCars().subscribe({
      next: (data: Cars[]) => {
        this.cars = data; 
        this.error = null; 
        this.dataSource.data=data;
      
    
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

  onDelete(): void {
    
  
}
}

