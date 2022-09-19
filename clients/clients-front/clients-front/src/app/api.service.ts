import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  updateClient(selected_client: { name: string; surname: string; }) {
    throw new Error('Method not implemented.');
  }
  baseUrl = 'http://localhost:8000/';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getAllClients() : Observable<any>{
    return this.http.get(this.baseUrl + 'clients/',
    {headers: this.httpHeaders });
  };

  getClient(id) : Observable<any>{
    return this.http.get(this.baseUrl + 'clients/' + id+ '/',
    {headers: this.httpHeaders});
  };

}
