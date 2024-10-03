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


}
