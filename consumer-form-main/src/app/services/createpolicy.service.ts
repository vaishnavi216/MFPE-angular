import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import{ IcreatepolicyData}from "src/app/models/createpolicyData";
@Injectable({
    providedIn: 'root',
})
export class CreatePolicy{
    
    private baseURL = environment.policyBaseURL;
    constructor(private httpClient: HttpClient) {}
    cPolicy(data: IcreatepolicyData): Observable<any>{
        const createURL = `${this.baseURL}/createPolicy`;
        const header = {
            authorization: `Bearer ${localStorage.getItem('token')}`,
            'Access-Control-Allow-Origin': '*'
        }
        return this.httpClient.post(createURL, data, {
            headers: header
        });
        
        
    }
}