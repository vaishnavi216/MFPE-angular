import { Component, OnInit } from '@angular/core';
import {IPropertyFormData} from '../models/BusinessData';
import {ViewPropertyService} from '../services/viewproperty.service';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-business-details-view',
  templateUrl: './business-details-view.component.html',
  styleUrls: ['./business-details-view.component.css']
})
export class BusinessDetailsViewComponent implements OnInit {

  id!: number;
  public errorMessage:string=''; 
  public message=false;
  propertyformdata!: IPropertyFormData;
  public propertyViewForm = new FormGroup({});
  constructor(private _consumerFormBuilder: FormBuilder,private viewpropertyservice:ViewPropertyService,private toastr: ToastrService) { }
  ngOnInit(): void {
    this.propertyViewForm = this._consumerFormBuilder.group({
      id: ['',[Validators.required, Validators.pattern('^[0-9]{4}$')]],
      pid: ['',[Validators.required, Validators.pattern('^[0-9]{1}$')]]
    
    });
  }
  viewPropertyDetails(data: any){
  
    this.viewpropertyservice.viewPropertyDetails(data.id,data.pid).subscribe(data => {
      this.propertyformdata=data;
      this.message=true;
      //this.toastr.success('Property found Successfully');
      this.propertyViewForm.reset();
    },
    (err) => {
      console.log('err', err);
      this.message=false;
      this.errorMessage = err.error.message;
      this.toastr.error(this.errorMessage);
      
    });

  }

}
