import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import { IConsumerFormData } from 'src/app/models/consumerData';
import { ConsumerService } from 'src/app/services/consumer.service';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  id!: number;
  public message = false;
  public errorMessage = '';
  consumerformdata!: IConsumerFormData;
  public consumerViewForm = new FormGroup({});
  constructor(private route: ActivatedRoute,private _consumerFormBuilder: FormBuilder,private consumerService: ConsumerService,private _router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.consumerViewForm = this._consumerFormBuilder.group({
      id: ['',[Validators.required, Validators.pattern('^[0-9]{4}$')]]});
  }
  getDetails(data: any){
    
    console.log("hello");
    this.consumerService.viewConsumerDetails(data.id).subscribe(data => {
     console.log(data);
     this.message=true;
      this.consumerformdata=data;
    }, (err) => {
      console.log(err);
      this.message=false;
      this.errorMessage = err.error.message;
      this.toastr.error(this.errorMessage);
      //this.consumerViewForm.reset();
      if(this.errorMessage === 'Not allowed') {
        this._router.navigate(['/login'])
      }
    })
  }

}
