import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-clients-detail',
  templateUrl: './clients-detail.component.html',
  styleUrls: ['./clients-detail.component.css']
})
export class ClientsDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private api:ApiService,
    private router: Router,
    private appComponente: AppComponent) { }
    selected_client = {id: '', name: '', surname: '', phone: ''};
    selected_id;

  ngOnInit(){
    this.route.paramMap.subscribe((param:ParamMap) => {
     let id = parseInt(param.get('id') );
     this.selected_id = id;
     this.loadClient(id);
    });
  }
  loadClient(id){
    this.api.getClient(id).subscribe(
      data => {
        this.selected_client = data;
      },
     error =>{
      console.log("Ocorreu um erro", error.message);
     }
    );
 };
 update(){
  this.api.updateClient(this.selected_client).subscribe(
    data => {
      this.selected_client = data;
    },
   error =>{
    console.log("Ocorreu um erro", error.message);
   }
  );
 };
 delete(){
  this.api.deleteClient(this.selected_id).subscribe(
    data => {
      let index;
        this.appComponente.clients.forEach((e,i) =>{
          if(e.id == this.selected_id)
          index = i;
        });

        this.appComponente.clients.splice(index, 1);
    },
      error =>{
    console.log("Ocorreu um erro", error.message);
   }
  );
 };

 newClient(){
  this.router.navigate(['new-client']);
 }

 }








