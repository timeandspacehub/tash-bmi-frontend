import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UkcomponentComponent } from './ukcomponent.component';

describe('UkcomponentComponent', () => {
  let component: UkcomponentComponent;
  let fixture: ComponentFixture<UkcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UkcomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UkcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
