import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IPropertyFormData } from "../models/BusinessData";



@Injectable({
    providedIn: 'root',
})
export class UpdatePropertyService {
    private baseURL = environment.consumerBaseURL;

    constructor(private httpClient: HttpClient) {}
   
    updatePropertyDetails(data: IPropertyFormData): Observable<any>{
        const createURL = `${this.baseURL}/updateBusinessProperty`;
        const header = {
            authorization: `Bearer ${localStorage.getItem('token')}`,
            'Access-Control-Allow-Origin': '*'
        }
        return this.httpClient.put(createURL, data, {
            headers: header
        });
    }
}