import { Component, Input } from '@angular/core';
import { Cars } from '../Shared/Model/cars';
import { routes } from '../app.routes';
import { CarService } from '../services/car.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-car-list-item',
  standalone: true,
  imports: [],
  templateUrl: './car-list-item.component.html',
  styleUrl: './car-list-item.component.scss'
})

export class CarListItemComponent {
@Input() carI?: Cars;
car: Cars | undefined
cars : Cars[] = [];
currentIndex: number = 0;
error: string | null = null;

constructor(
  private route: ActivatedRoute,
  private carService: CarService,
  private router: Router
){

}
}






