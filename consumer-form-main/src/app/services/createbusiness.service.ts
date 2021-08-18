import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IPropertyFormData } from "src/app/models/BusinessData";

@Injectable({
    providedIn: 'root',
})
export class CreateBusinessService {
    private baseURL = environment.consumerBaseURL;

    constructor(private httpClient: HttpClient) {}
    createBusinessDetails(data: IPropertyFormData): Observable<any>{
        const createURL = `${this.baseURL}/createBusinessProperty`;
        const header = {
            authorization: `Bearer ${localStorage.getItem('token')}`,
            'Access-Control-Allow-Origin': '*'
        }
        return this.httpClient.post(createURL, data, {
            headers: header
        });
    }
}