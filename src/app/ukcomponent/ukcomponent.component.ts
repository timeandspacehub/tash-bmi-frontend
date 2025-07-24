import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {HttpClient} from '@angular/common/http';
import { UkcomponentresultComponent } from '../ukcomponentresult/ukcomponentresult.component';
interface BmiResponse {
  bmi: number;
  category: string;
}
@Component({
  selector: 'app-ukcomponent',
  standalone: true,
  imports: [CommonModule,FormsModule,UkcomponentresultComponent],
  templateUrl: './ukcomponent.component.html',
  styleUrl: './ukcomponent.component.scss'
})
export class UkcomponentComponent {
  height!:number;
  weight!:number;

  bmiResult:BmiResponse |null=null;
  error:string | null=null;

  constructor(private http:HttpClient){}

  calculateUKBMI(){
    if (!this.height || !this.weight) {
      this.error = 'Please fill all fields!';
      return;
    }
    this.error=null;

    const apiUrl = `http://localhost:8083/bmi/metric?height=${this.height}&weight=${this.weight}`;

    this.http.get<BmiResponse>(apiUrl).subscribe({
      next: (response) => {
        console.log('Data: ', response); // { bmi: 22.5, category: 'Normal weight' }
        this.bmiResult = response;
      },
      error: (err) => {
        console.error(err);
        this.error = 'Failed to fetch BMI';
      }
    });
    
  }
}
