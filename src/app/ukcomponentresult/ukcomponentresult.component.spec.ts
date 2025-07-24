import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UkcomponentresultComponent } from './ukcomponentresult.component';

describe('UkcomponentresultComponent', () => {
  let component: UkcomponentresultComponent;
  let fixture: ComponentFixture<UkcomponentresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UkcomponentresultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UkcomponentresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
