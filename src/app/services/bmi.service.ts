import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BmiService {
  private baseUrl = 'http://localhost:8080/bmi/USCS';

  constructor(private http:HttpClient) { }
  calculateBMI(feet:number, inches:number, weightinPounds:number): Observable<string>{
    const params = new HttpParams()
    .set('feet', feet)
    .set('inches', inches)
    .set('weightinPounds', weightinPounds);

    return this.http.get(this.baseUrl,{params, responseType: 'text'});
  }
}
