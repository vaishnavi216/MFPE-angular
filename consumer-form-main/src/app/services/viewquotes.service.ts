import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root',
})
export class ViewQuotes{
    
    quote:String=''
    constructor(private httpClient: HttpClient) {}
    private baseURL = environment.policyBaseURL;
    viewQuotesDetails(bvalue: number,pvalue: number,ptype:string): Observable<any>{
        const createURL = `${this.baseURL}/getQuotes/${bvalue}/${pvalue}/${ptype}`;
        const header = {
            authorization: `Bearer ${localStorage.getItem('token')}`,
            'Access-Control-Allow-Origin': '*'
        }
        return this.httpClient.get<String>(createURL, {
            headers: header
        });
    }  
   
    
}