import { Component } from '@angular/core';
import { Cars } from './Shared/Model/cars';
import { CarListComponent} from './car-list/car-list.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {JsonPipe, NgForOf} from "@angular/common";
import { NgOptimizedImage } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgForOf, JsonPipe,CarListComponent, RouterLink,RouterOutlet,RouterLinkActive, NgOptimizedImage ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'

})
export class AppComponent {
  title= 'Sam Mustapha Learning Angular';
  
}



