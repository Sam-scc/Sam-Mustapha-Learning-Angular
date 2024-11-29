import { Component } from '@angular/core';
import { NgForOf, JsonPipe } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HoverHighlightDirective } from './directives/hover-highlight.directive';
import { FocusDirective } from './directives/focus.directive';
import { CarListComponent } from './car-list/car-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgForOf,
    JsonPipe,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatCheckboxModule,
    HoverHighlightDirective,
    FocusDirective,
    CarListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Sam Mustapha Learning Angular';
}

