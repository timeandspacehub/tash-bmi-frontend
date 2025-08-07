import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  // styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private msalService: MsalService, private router: Router) {}

  login() {
    this.msalService.loginPopup().subscribe({
      next: (result) => {
        this.msalService.instance.setActiveAccount(result.account);
        this.router.navigate(['/bmi']);
      },
      error: (err) => console.error(err)
    });
  }
}
