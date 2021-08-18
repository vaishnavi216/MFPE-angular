import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessDetailsCreateComponent } from './business-details-create.component';

describe('BusinessDetailsCreateComponent', () => {
  let component: BusinessDetailsCreateComponent;
  let fixture: ComponentFixture<BusinessDetailsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessDetailsCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessDetailsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
