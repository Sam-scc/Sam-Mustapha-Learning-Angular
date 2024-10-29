import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule, FormsModule} from '@angular/forms';
import { Cars } from '../Shared/Model/cars';
import { CarService } from '../services/car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { cars } from '../Shared/Model/mockCar';

@Component({
  selector: 'app-modify-car',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './modify-car.component.html',
  styleUrl: './modify-car.component.scss'
})
export class ModifyCarComponent implements OnInit {
  carForm: FormGroup;
  carId: Cars | undefined;


  constructor(
    private fb: FormBuilder;
    private route: ActivatedRoute;
    private carService: CarService;
    private router : Router;
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
      this .carService.getCarById(id).subscribe(cars =>{
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
    }else{
      this.carService.addCar(cars).subscribe(()=> this.router.navigate(['/cars']));
    }
  }
}

onAdd(): void{ 
  const id = this.carForm.get('id')?.value;
  if(id){
    this.carService.deleteCar(id)
     this.router.navigate(['/cars']);
  }
}

onUpdate(): void{ 
  const id = this.carForm.get('id')?.value;
  if(id){
    this.carService.deleteCar(id)
     this.router.navigate(['/cars']);
  }
}



}
