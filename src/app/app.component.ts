import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BmiService } from './services/bmi.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,             
  imports: [FormsModule, CommonModule, HttpClientModule],       
  templateUrl: './app.component.html',
})
export class AppComponent {
  formData = {
    feet: 0,
    inches: 0,
    weight: 0
  };

  bmiResult: string = '';
  
  constructor(private bmiService : BmiService){}

  onSubmit() {
    this.bmiService
    .calculateBMI(this.formData.feet, this.formData.inches, this.formData.weight)
    .subscribe({
      next: (result) => {
        this.bmiResult = result;
      },
      error: (err) =>{
        console.error('BMI Calculation Failed', err);
        this.bmiResult = 'Error calculating BMI.';
      },
    });
    
    }
    
}
