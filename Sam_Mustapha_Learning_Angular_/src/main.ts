import { bootstrapApplication } from '@angular/platform-browser';
//import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { CarListComponent } from './app/car-list/car-list.component';
import { CarListItemComponent } from './app/car-list-item/car-list-item.component';
import { ModifyCarComponent } from './app/modify-car/modify-car.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';

const routes: Routes=[
  {path:'', redirectTo: '/students', pathMatch: 'full'},
  {path: 'cars', component: CarListComponent},
  {path: 'cars/:id', component: CarListItemComponent},
  {path:'modify-car', component: ModifyCarComponent},
  {path: '**', component: PageNotFoundComponent}
 ];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
 });

