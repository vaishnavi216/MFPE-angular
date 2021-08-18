import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessDetailsUpdateComponent } from './business-details-update.component';

describe('BusinessDetailsUpdateComponent', () => {
  let component: BusinessDetailsUpdateComponent;
  let fixture: ComponentFixture<BusinessDetailsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessDetailsUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessDetailsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
