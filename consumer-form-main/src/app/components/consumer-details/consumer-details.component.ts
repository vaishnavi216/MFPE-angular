import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
@Component({
  selector: 'app-consumer-details',
  templateUrl: './consumer-details.component.html',
  styleUrls: ['./consumer-details.component.css']
})
export class ConsumerDetailsComponent implements OnInit {
  public consumerViewForm = new FormGroup({});
  public consumerid: string='';
  constructor(private router:Router,private _consumerFormBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.consumerViewForm = this._consumerFormBuilder.group({
      consumerId: ['',[Validators.required, Validators.pattern('^[0-9]{4}$')]],
      
    });
  }

  getDetails(cid: string){
    console.log("hello");
    var id=Number(cid);
    console.log(cid);
    this.router.navigate(['/consumer-details/view',id]);
  }
  updateDetails(cid: string){
    console.log("hello");
    var id=Number(cid);
    console.log(cid);
    this.router.navigate(['/consumer-details/update',id]);
  }

}