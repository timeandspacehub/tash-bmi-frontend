import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiInputComponentComponent } from './bmi-input-component.component';

describe('BmiInputComponentComponent', () => {
  let component: BmiInputComponentComponent;
  let fixture: ComponentFixture<BmiInputComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BmiInputComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BmiInputComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
