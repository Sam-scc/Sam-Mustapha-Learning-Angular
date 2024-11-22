import { Component } from '@angular/core';
import { Cars } from './Shared/Model/cars';
import { CarListComponent} from './car-list/car-list.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {JsonPipe, NgForOf} from "@angular/common";
import { NgOptimizedImage } from '@angular/common';
import { HoverHighlightDirective } from './directives/hover-highlight.directive';
import { FocusDirective } from './directives/focus.directive';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgForOf, JsonPipe,CarListComponent, RouterLink,RouterOutlet,RouterLinkActive, NgOptimizedImage,HoverHighlightDirective,FocusDirective ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'

})
export class AppComponent {
  title= 'Sam Mustapha Learning Angular';
  
}



