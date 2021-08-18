import { Component, OnInit } from '@angular/core';
import { IviewpolicyData} from 'src/app/models/viewpolicyData';
import { ViewPolicy } from '../services/viewpolicy.service';
import { Router } from '@angular/router'
import { FormGroup,FormControl, Validators, FormBuilder } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-viewpolicy',
  templateUrl: './viewpolicy.component.html',
  styleUrls: ['./viewpolicy.component.css']
})
export class ViewpolicyComponent implements OnInit {
  public policyViewForm = new FormGroup({});
  public message=false;
  public errorMessage:string=''; 
  consumerformdata!: IviewpolicyData;
  constructor(private router:Router,private _consumerFormBuilder: FormBuilder,private toastr: ToastrService,private viewpolicy: ViewPolicy) { }

  ngOnInit(): void {
    this.policyViewForm = this._consumerFormBuilder.group({
      id: ['',[Validators.required, Validators.pattern('^[0-9]{4}$')]],
    consid: ['',[Validators.required, Validators.pattern('^[0-9]{4}$')]]});
  }

  viewPolicy(data: any){
    console.log("hello");
    var pid=Number(data.id);
    var cons=Number(data.consid)
    console.log(pid);
    this.viewpolicy.viewPolicyDetails(cons,pid).subscribe(data => {
      this.message=true;
      this.consumerformdata=data;
      this.policyViewForm.reset();
    },(err) => {
      console.log('err', err);
      this.message=false;
      this.errorMessage = err.error.message;
      this.toastr.error(this.errorMessage);
    });
 

}
}
