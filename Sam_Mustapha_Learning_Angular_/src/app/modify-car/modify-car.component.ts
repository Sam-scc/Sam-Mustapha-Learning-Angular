import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule, FormsModule} from '@angular/forms';
import { Cars } from '../Shared/Model/cars';
import { CarService } from '../services/car.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { cars } from '../Shared/Model/mockCar';
import { FocusDirective } from '../directives/focus.directive';

@Component({
  selector: 'app-modify-car',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink,FocusDirective],
  templateUrl: './modify-car.component.html',
  styleUrl: './modify-car.component.scss'
})
export class ModifyCarComponent implements OnInit {
  carForm: FormGroup;
  carId: Cars | undefined;


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private carService: CarService,
    private router : Router
  ){
    this.carForm = this.fb.group({
      id:['', Validators.required],
      carName:['',Validators.required],
      price:[''],
      model:[''],
      isAvailable:[false]
    });
  }
  ngOnInit(): void {
    const id=Number(this.route.snapshot.paramMap.get('id'));
    if(id){
      this.carService.getCarById(id).subscribe(cars =>{
        if(cars){
          this.carForm?.patchValue(cars);
        }
      });
    }
  }
onSubmit():void{
  if(this.carForm.valid){
    const cars: Cars = this.carForm.value;
    if(cars.id){
      this.carService.updateCar(cars).subscribe(()=> this.router.navigate(['/cars']));
      this.carForm.reset();
    }else{
      this.carService.addCar(cars).subscribe(()=> this.router.navigate(['/cars']));
      this.carForm.reset();
    }
  }
}


onAdd(): void{ 
  this.onSubmit()
}

onUpdate(): void{ 
  this.onSubmit()
}



}
