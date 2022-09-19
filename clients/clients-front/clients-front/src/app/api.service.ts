import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
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

  updateClient(client) : Observable<any>{
    let body= {id: client.id, name: client.name, surname: client.surname, phone: client.phone};
    return this.http.put(this.baseUrl + 'clients/' + client.id + '/',client,
    {headers: this.httpHeaders });
  };

  saveNewClient(client): Observable<any>{
    return this.http.post(this.baseUrl + 'clients/', client,
    {headers: this.httpHeaders });

  };

}
