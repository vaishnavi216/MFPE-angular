import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IConsumerFormData } from "../models/consumerData";
import { ILoginFormData } from "../models/loginFormData";


@Injectable({
    providedIn: 'root',
})
export class ConsumerService {
    private baseURL = environment.consumerBaseURL;

    constructor(private httpClient: HttpClient) {}
    /*loginUser(data: ILoginFormData): Observable<any>{
        const loginURL = `${environment.loginBaseURL}/auth/authenticate`
        return this.httpClient.post(loginURL, data);
    }*/

  /*  createConsumerDetails(data: IConsumerFormData): Observable<any>{
        const createURL = `${this.baseURL}/createConsumerBusiness`;
        const header = {
            authorization: `Bearer ${localStorage.getItem('token')}`,
            'Access-Control-Allow-Origin': '*'
        }
        return this.httpClient.post(createURL, data, {
            headers: header
        });
    }
    viewConsumerDetails(id: number): Observable<any>{
        const createURL = `${this.baseURL}/viewConsumerBusiness/${id}`;
        const header = {
            authorization: `Bearer ${localStorage.getItem('token')}`,
            'Access-Control-Allow-Origin': '*'
        }
        return this.httpClient.get<IConsumerFormData>(createURL, {
            headers: header
        });
    }*/
    updateConsumerDetails(data: IConsumerFormData): Observable<any>{
        const createURL = `${this.baseURL}/updateConsumerBusiness`;
        const header = {
            authorization: `Bearer ${localStorage.getItem('token')}`,
            'Access-Control-Allow-Origin': '*'
        }
        return this.httpClient.put(createURL, data, {
            headers: header
        });
    }
}