import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BmiComponent } from './bmi/bmi.component';
import { authGuard } from './/auth.guard';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'bmi', component: BmiComponent, canActivate: [authGuard] }  // BMI page (will protect next)
];
