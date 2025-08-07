import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { UkcomponentComponent } from '../ukcomponent/ukcomponent.component';
import { UkcomponentresultComponent } from '../ukcomponentresult/ukcomponentresult.component';

@Component({
  selector: 'app-bmi',
  standalone: true,
  imports: [UkcomponentComponent, UkcomponentresultComponent],
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.scss']
})
export class BmiComponent {
  constructor(private msalService: MsalService, private router: Router) {}

  logout() {
    this.msalService.logoutPopup().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
