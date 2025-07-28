import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface BmiResponse {
  bmi: number;
  category: string;
}

@Component({
  selector: 'app-ukcomponentresult',
  standalone: true,
  templateUrl: './ukcomponentresult.component.html',
  imports: [CommonModule],  
  styleUrls: ['./ukcomponentresult.component.scss']
})
export class UkcomponentresultComponent {
  @Input() result!: BmiResponse | null;
}