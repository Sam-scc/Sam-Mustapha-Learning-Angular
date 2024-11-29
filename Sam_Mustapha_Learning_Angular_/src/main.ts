import { bootstrapApplication } from '@angular/platform-browser';
//import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { CarListComponent } from './app/car-list/car-list.component';
import { CarListItemComponent } from './app/car-list-item/car-list-item.component';
import { ModifyCarComponent } from './app/modify-car/modify-car.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './app/in-memory-data.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const routes: Routes=[
  {path:'', redirectTo: '/cars', pathMatch: 'full'},
  {path: 'cars', component: CarListComponent},
  {path: 'cars/:id',
    loadComponent:() =>
    import('./app/car-list/car-list.component').then(m => m.CarListComponent)},
    {
    path:'modify-car',
    loadComponent:() =>
      import('./app/modify-car/modify-car.component').then(m => m.ModifyCarComponent)},
    {
      path: '**',
      loadComponent: () =>
        import('./app/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)
    }
  
 ];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
  importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{delay: 1000})), provideAnimationsAsync()
],
 }).catch((err) => console.error(err));

