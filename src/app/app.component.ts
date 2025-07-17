import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BmiInputComponentComponent } from './bmi-input-component/bmi-input-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BmiInputComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-angular-app';
}
