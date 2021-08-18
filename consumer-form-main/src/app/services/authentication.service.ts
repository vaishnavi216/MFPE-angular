import { Router } from '@angular/router';
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ILoginFormData } from "../models/loginFormData";
import { Observable } from "rxjs";
export class User {
  constructor(public status: string) {}
}

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {

    private baseURL = environment.authBaseURL;
  constructor(private router: Router,private httpClient: HttpClient) {}
// Provide username and password for authentication, and once authentication is successful, 
//store JWT token in session

loginUser(data: ILoginFormData): Observable<any>{
    const loginURL = `${environment.loginBaseURL}/auth/authenticate`
    return this.httpClient.post(loginURL, data);
}

  isUserLoggedIn() {
    let user = localStorage.getItem("token");
    console.log(!(user === null));
    return !(user === null);
  }

}