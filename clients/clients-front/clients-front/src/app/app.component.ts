import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'clients-front';

selected_client = {id:0, name:'', surname:''};

clients = [
  {name: 'Client 01', id: 6, surname: "Lomba", photo: 'http://www.minhaapp.com/photo1'},
  {name: 'Client 02', id: 7, surname: "Araújo", photo: 'http://www.minhaapp.com/photo2'},
  {name: 'Client 03', id: 8, surname: "Ferreira", photo: 'http://www.minhaapp.com/photo3'}
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

  clientClicked =(client) =>{
    this.api.getClient(client.id).subscribe(
      data => {
        console.log(data);
        this.selected_client = data;
      },
     error =>{
      console.log("Ocorreu um erro", error);
     }
    );
  };
  }





