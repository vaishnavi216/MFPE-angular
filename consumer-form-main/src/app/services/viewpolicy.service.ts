import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import{ IviewpolicyData}from "../models/viewpolicyData";
@Injectable({
    providedIn: 'root',
})
export class ViewPolicy{
    
    constructor(private httpClient: HttpClient) {}
    private baseURL = environment.policyBaseURL;
    viewPolicyDetails(id: number,consid: number): Observable<any>{
        const createURL = `${this.baseURL}/viewPolicy/${id}/${consid}`;
        const header = {
            authorization: `Bearer ${localStorage.getItem('token')}`,
            'Access-Control-Allow-Origin': '*'
        }
        return this.httpClient.get<IviewpolicyData>(createURL, {
            headers: header
        });
    }  
   
    
}