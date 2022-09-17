import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'clients-front';

clients = [
  {name: 'Client 01', id: 1, surname: "Lomba", photo: 'http://www.minhaapp.com/photo1'},
  {name: 'Client 02', id: 2, surname: "Oliveira", photo: 'http://www.minhaapp.com/photo2'},
  {name: 'Client 03', id: 3, surname: "Ferreira", photo: 'http://www.minhaapp.com/photo3'}
];

constructor(private api:ApiService){
  this.getClients();
}
getClients = () => {
  this.api.getAllClients().subscribe(
    data => {
   this.clients = data
    },
   error =>{
    console.log("Ocorreu um erro", error);
   }
  );
};
}





