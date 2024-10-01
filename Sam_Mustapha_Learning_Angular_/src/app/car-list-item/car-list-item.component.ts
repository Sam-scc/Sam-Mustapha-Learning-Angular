import { Component, Input } from '@angular/core';
import { Cars } from '../Shared/Model/cars';

@Component({
  selector: 'app-car-list-item',
  standalone: true,
  imports: [],
  templateUrl: './car-list-item.component.html',
  styleUrl: './car-list-item.component.scss'
})
export class CarListItemComponent {
@Input() carI?: Cars;
}
