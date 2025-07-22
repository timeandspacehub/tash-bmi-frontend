import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bmi-input-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bmi-input-component.component.html',
  styleUrls: ['./bmi-input-component.component.scss'],
})
export class BmiInputComponentComponent {
  formData = {
    height: null,
    weight: null,
  };

  onSubmit() {
    console.log('Form submitted', this.formData);
  }
}
