import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import{ IissuepolicyData}from "../models/issuepolicyData";
@Injectable({
    providedIn: 'root',
})
export class IssuePolicy{
    
    private baseURL = environment.policyBaseURL;
    constructor(private httpClient: HttpClient) {}
    iPolicy(data: IissuepolicyData): Observable<any>{
        const createURL = `${this.baseURL}/issuePolicy`;
        const header = {
            authorization: `Bearer ${localStorage.getItem('token')}`,
            'Access-Control-Allow-Origin': '*'
        }
        return this.httpClient.post(createURL, data, {
            headers: header
        });
        
        
    }
}