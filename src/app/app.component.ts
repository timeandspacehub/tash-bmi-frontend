import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';   // Needed for ngForm & ngModel
import { CommonModule } from '@angular/common'; // Needed for *ngIf
import { UkcomponentComponent } from './ukcomponent/ukcomponent.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule,UkcomponentComponent],  //Add these
  templateUrl: './app.component.html',
  
})
export class AppComponent {

}
