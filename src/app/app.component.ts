import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,             
  imports: [FormsModule],       
  templateUrl: './app.component.html',
})
export class AppComponent {
  formData = {
    height: 0,
    weight: 0
  };

  onSubmit() {
    console.log('Form Data:', this.formData);
  }
}
