import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import {IissuepolicyData} from "../models/issuepolicyData";
import {IssuePolicy} from "../services/issuepolicy.service";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-issuepolicy',
  templateUrl: './issuepolicy.component.html',
  styleUrls: ['./issuepolicy.component.css']
})
export class IssuepolicyComponent implements OnInit {
  public issuePolicyForm = new FormGroup({});
  public errorMessage = '';
  public message='';
  constructor(private _policyFormBuilder: FormBuilder, 
    private issuePolicy: IssuePolicy, 
    private _router: Router,private toastr: ToastrService) { }


  ngOnInit(): void {

    this.issuePolicyForm = this._policyFormBuilder.group(
      {
        id: ['',[Validators.required, Validators.pattern('^[0-9]{4}$')]],
        consumerid: ['',[Validators.required, Validators.pattern('^[0-9]{4}$')]],
        businessid: ['',[Validators.required, Validators.pattern('^[0-9]{3}$')]],
        paymentdetails: ['', Validators.required],
        acceptancestatus: ['', Validators.required]
      }
    )
  }
  iPolicy(data: IissuepolicyData){
    console.log('from login comp ', data);
    this.issuePolicy.iPolicy(data).subscribe( (response) => {
      console.log(response);
      //this.message = response.message;
      this.toastr.success(response.message);
      this.issuePolicyForm.reset();
      console.log(localStorage.getItem('token'));
      
    }, (err) => {
      console.log('err', err);
     // this.errorMessage = err.error.message;
     this.toastr.error(err.error.message);
    });
  }

}
