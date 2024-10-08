import { bootstrapApplication } from '@angular/platform-browser';
//import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { CarListComponent } from './app/car-list/car-list.component';
import { CarListItemComponent } from './app/car-list-item/car-list-item.component';

const routes: Routes=[
  {path: 'cars', component: CarListComponent},
  {path: 'cars/:id', component: CarListItemComponent}
 ];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
 });

