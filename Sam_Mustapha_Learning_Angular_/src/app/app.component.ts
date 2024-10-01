import { Component } from '@angular/core';
import { Cars } from './Shared/Model/cars';
import {NgForOf, NgIf} from '@angular/common';
import { CarListComponent} from './car-list/car-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgForOf, NgIf,CarListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'

})
export class AppComponent {
  title= 'Sam_Mustapha_Learning_Angular_';
  
}



