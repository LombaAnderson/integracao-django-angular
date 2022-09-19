import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {
  client = { name: '', surname: '', phone: ''};

  constructor(
    private api: ApiService,
    private appComponent: AppComponent) { }

  ngOnInit(): void {
  }

  save(){
    this.api.saveNewClient(this.client).subscribe(
      data => {
        this.appComponent.clients.push(data);
      },
     error =>{
      console.log("Ocorreu um erro", error.message);
     }
    );

  }

}
