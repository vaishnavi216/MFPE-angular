import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { IConsumerFormData } from 'src/app/models/consumerData';
import { ConsumerService } from 'src/app/services/updateconsumer.service';
//import { ConsumerService } from 'src/app/services/consumer.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {

  public consumerForm = new FormGroup({});
  public categories = ['Retailer', 'Food Service', 'Supplier', 'Manufacturer', 'Business Service', 'Investor'];
  public retailerTypes = ['E-tailer','Independent Grocer', 'Home and Textile', 'Pharmacy','Mass Merchandiser'];
  public foodserviceTypes=['Full Service Restaurant','Corporate Dining','Coffee House','Private Chef'];
  public supplierTypes=['Ingredient Importer','Equipment Supplier'];
  public manufacturerTypes=['Food','Pharmaceuticals','Cosmetics','Beverage','Pet Products'];
  public businessServiceTypes=['Consultant','Government Agency','Publisher','Financial Institution'];
  public investorTypes=['Private Equity Fund','Corporate Invester','Hedge Fund'];
  public actualTypes: Array<string> = [];
  public bsCategory = '';
  public message = '';
  public errorMessage = '';
  constructor(private _consumerFormBuilder: FormBuilder, 
    private _router: Router,
    private updateConsumerService: ConsumerService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.consumerForm = this._consumerFormBuilder.group({
      consumerId: ['',[Validators.required, Validators.pattern('^[0-9]{4}$')]],
      businessid: ['',[Validators.required, Validators.pattern('^[0-9]{3}$')]],
      firstname:  ['',[Validators.required, Validators.pattern('^[A-Za-z\\s]{4,15}$')]],
      lastname:  ['',[Validators.required, Validators.pattern('^[A-Za-z\\s]{4,15}$')]],
      businessname: ['',[Validators.required, Validators.pattern('^[A-Za-z0-9-_\\s]{4,30}$')]],
      dob: ['',Validators.required],
      location: ['',Validators.required],
      email: ['',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]{2,8}\.[a-z]{2,4}$')]],
      website: ['',[Validators.required, Validators.pattern('^(www.)?[a-z0-9/_-]{2,50}?(.com)$')]],
      businessoverview: ['',[Validators.required, Validators.pattern('^[A-Za-z._-\\s]{4,30}$')]],
      validity:  ['',[Validators.required, Validators.pattern('^[0-9]{1,2}$')]],
      agentname: ['',[Validators.required, Validators.pattern('^[A-Za-z\\s]{4,15}$')]],
      agentid: ['',[Validators.required, Validators.pattern('^[0-9]{1}$')]],
      phone: ['',[Validators.required, Validators.pattern('^[0-9]{10}$')]],
      pandetails: ['',[Validators.required, Validators.pattern('^[A-Z0-9]{10}$')]],
      businesscategory: [null],
      businesstype: [null],
      businessturnover: ['',[Validators.required, Validators.pattern('^[0-9]{1,3}$')]],
      capitalinvested: ['',[Validators.required, Validators.pattern('^[0-9]{1,3}$')]],
      totalemployees: ['',[Validators.required, Validators.pattern('^[0-9]{1,3}$')]],
      businessage: ['',[Validators.required, Validators.pattern('^[0-9]{1,2}$')]],
    });
  }

  doAction(data: IConsumerFormData) {
    console.log(data);
    this.updateConsumerService.updateConsumerDetails(data).subscribe((response) => {
      console.log(response);
    //  this.message = response.message;
    this.toastr.success(response.message);
    this.consumerForm.reset();
    }, (error) => {
      console.log(error);
      this.toastr.error(error.message);
      this.errorMessage = error?.error?.message
      if(this.errorMessage === 'Not allowed') {
        this._router.navigate(['/login'])
      }
    })
  }

  changeType(value: string) {
    if(value === 'Retailer') {
      this.actualTypes = this.retailerTypes;
    } 
    else if(value === 'Food Service')
    {
      this.actualTypes = this.foodserviceTypes;
    }
    else if(value === 'Supplier')
    {
      this.actualTypes = this.supplierTypes;
    }
    else if(value === 'Manufacturer')
    {
      this.actualTypes = this.manufacturerTypes;
    }
    else if(value === 'Business Service')
    {
      this.actualTypes = this.businessServiceTypes;
    }
    else if(value === 'Investor')
    {
      this.actualTypes = this.investorTypes;
    }
    else{
      this.actualTypes=[];
    }
  }

}
