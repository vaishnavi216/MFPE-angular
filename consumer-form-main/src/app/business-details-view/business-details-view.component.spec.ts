import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessDetailsViewComponent } from './business-details-view.component';

describe('BusinessDetailsViewComponent', () => {
  let component: BusinessDetailsViewComponent;
  let fixture: ComponentFixture<BusinessDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessDetailsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
