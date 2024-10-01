import { Component } from '@angular/core';
import { Cars } from '../Shared/Model/cars';
import {NgClass, NgForOf} from '@angular/common';
import { CarListItemComponent } from '../car-list-item/car-list-item.component';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [NgClass, NgForOf, CarListItemComponent],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.scss'
})
export class CarListComponent {
  cars: Cars[]=[
    {id: 1 , carName:"Audi", price :12660, model:"A4 Premium", isAvailable: true},
    {id: 2 , carName:"Ford", price :26000, model:"Mustang", isAvailable: false},
    {id: 3 , carName:"Toyota", price :24000, model:"Camry", isAvailable: true},
    {id: 4 , carName:"BMW", price :30000, model:"3 Series", isAvailable: true},
    {id: 5 , carName:"Mercedes-Benz", price :35000, model:"C-Class", isAvailable: true},
    {id: 6 , carName:"Kia", price :35000, model:"Optima", isAvailable: true}
    

  ];

}
