import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import {IcreatepolicyData} from "../models/createpolicyData";
import {CreatePolicy} from "../services/createpolicy.service";
@Component({
  selector: 'app-createpolicy',
  templateUrl: './createpolicy.component.html',
  styleUrls: ['./createpolicy.component.css']
})
export class CreatepolicyComponent implements OnInit {

  constructor(private _policyFormBuilder: FormBuilder, 
    private createPolicy: CreatePolicy, 
    private _router: Router,private toastr: ToastrService) { }
  public createPolicyForm = new FormGroup({});
  public errorMessage = '';
 // public message='';

  ngOnInit(): void {
    this.createPolicyForm = this._policyFormBuilder.group(
      {
        consumerid: ['',[Validators.required, Validators.pattern('^[0-9]{4}$')]],
        acceptedquotes: ['',[Validators.required, Validators.pattern('^[0-9]{4,6}?(INR)$')]]
      }
    )
  }
  cPolicy(data: IcreatepolicyData){
    console.log('from login comp ', data);
    this.createPolicy.cPolicy(data).subscribe( (response) => {
      console.log(response);
     // this.message = response.message;
      this.toastr.success(response.message);
     console.log(localStorage.getItem('token'));
      
    }, (err) => {
      console.log('err', err);
      this.errorMessage = err.error.message;
      this.toastr.error(this.errorMessage);
    
    });
  }

}
