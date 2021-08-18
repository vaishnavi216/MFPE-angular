import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup,FormControl, Validators, FormBuilder } from "@angular/forms";
import { ViewQuotes } from '../services/viewquotes.service';
import { ToastrService } from 'ngx-toastr';
import { IviewquotesData } from '../models/viewquotes';
@Component({
  selector: 'app-viewquotes',
  templateUrl: './viewquotes.component.html',
  styleUrls: ['./viewquotes.component.css']
})
export class ViewquotesComponent implements OnInit {

  public viewquotesForm = new FormGroup({});
  public message:string='';
  public errorMessage:string=''; 
quotesdata!: IviewquotesData;
  constructor(private router:Router,private _consumerFormBuilder: FormBuilder,private viewquotes: ViewQuotes,private toastr: ToastrService) { }
  ngOnInit(): void {
    this.viewquotesForm = this._consumerFormBuilder.group({
      bvalue: ['',[Validators.required, Validators.pattern('^[0-9]{1}$')]],
    pvalue: ['',[Validators.required, Validators.pattern('^[0-9]{1}$')]],
    ptype: [null]
  });
  }
  viewquote(data: any){
    console.log(data);
    this.viewquotes.viewQuotesDetails(data.bvalue,data.pvalue,data.ptype).subscribe(
      (data) => {
        this.quotesdata=data;

this.message=this.quotesdata.quotes;

        this.toastr.success(this.message);
        console.log(this.message);
        this.viewquotesForm.reset();
      
    },(err) => {
      console.log('err', err);
      //this.errorMessage = err.error.message;
      this.toastr.error(err.error.message);
    });
  }




}
