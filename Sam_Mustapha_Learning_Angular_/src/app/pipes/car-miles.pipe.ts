import { Pipe, PipeTransform } from '@angular/core';
import { Cars } from '../Shared/Model/cars';

@Pipe({
  name: 'carMiles',
  standalone: true
})
export class CarMilesPipe implements PipeTransform {


transform(car: Cars): string{
  return `${car.carName} ${car.model}`
}

}
