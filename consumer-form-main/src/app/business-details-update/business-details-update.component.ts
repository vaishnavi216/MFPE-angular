import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import{IPropertyFormData} from'../models/BusinessData';
import { UpdatePropertyService} from 'src/app/services/updatebusiness.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-business-details-update',
  templateUrl: './business-details-update.component.html',
  styleUrls: ['./business-details-update.component.css']
})
export class BusinessDetailsUpdateComponent implements OnInit {

  public propertyForm = new FormGroup({});
  public message = '';
  public errorMessage = '';
  constructor(private _propertyFormBuilder: FormBuilder, 
    private _router: Router,
    private updatePropertyService: UpdatePropertyService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.propertyForm  = this._propertyFormBuilder.group({
      propertyId:  ['',[Validators.required, Validators.pattern('^[0-9]{1,3}$')]],
      businessId: ['',[Validators.required, Validators.pattern('^[0-9]{3}$')]],
      consumerId: ['',[Validators.required, Validators.pattern('^[0-9]{4}$')]],
      insurancetype: ['',Validators.required],
      propertytype: ['',Validators.required],
      buildingsqft: ['',[Validators.required, Validators.pattern('^[a-zA-z0-9]{1,10}$')]],
      buildingtype: ['',Validators.required],
      buildingstoreys: ['',[Validators.required, Validators.pattern('^[A-Za-z0-9-_\\s]{1,10}$')]],
      buildingage: ['',[Validators.required, Validators.pattern('^[0-9]{1,2}$')]],
      costoftheasset: ['',[Validators.required, Validators.pattern('^[0-9]{1,3}$')]],
      salvagevalue: ['',[Validators.required, Validators.pattern('^[0-9]{1,3}$')]],
      usefullifeoftheAsset: ['',[Validators.required, Validators.pattern('^[0-9]{1,3}$')]],
  });
  }

  doAction(data: IPropertyFormData) {
    console.log(data);
    this.updatePropertyService.updatePropertyDetails(data).subscribe((response) => {
      console.log(response);
     // this.message = response.message;
     this.toastr.success(response.message);
     this.propertyForm.reset();
    },(error) => {
      console.log(error);
      this.toastr.error(error.message);
      this.errorMessage = error?.error?.message

      if(this.errorMessage === 'Not allowed') {
        this._router.navigate(['/login'])
      }
    })
  }




}
