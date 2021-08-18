import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { ILoginFormData } from 'src/app/models/loginFormData';
import { Router } from "@angular/router";
import{AuthenticationService} from 'src/app/services/authentication.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm = new FormGroup({});
  public errorMessage = '';
  constructor(private _loginFormBuilder: FormBuilder, 
    private consumerService:AuthenticationService , 
    private _router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loginForm = this._loginFormBuilder.group(
      {
        userName: ['', Validators.required],
        password: ['', Validators.required]
      }
    )
  }

  loginUser(data: ILoginFormData) {
    console.log('from login comp ', data);
    
    this.consumerService.loginUser(data).subscribe( (response) => {
      //console.log(response);
      this.toastr.success("Login Successful!!")
      localStorage.setItem('token',response.token);
      console.log(localStorage.getItem('token'));
      this.redirectToNext();
    }, (err) => { 
      console.log('err', err);
      this.toastr.error(err.error.message);
      
      this.errorMessage = err.error.message;
    });
  }

  redirectToNext() {
    this._router.navigate(['/dashboard'])
  }
}
