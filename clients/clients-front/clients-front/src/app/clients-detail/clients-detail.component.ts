import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-clients-detail',
  templateUrl: './clients-detail.component.html',
  styleUrls: ['./clients-detail.component.css']
})
export class ClientsDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private api:ApiService) { }
  selected_client = {name: '', surname: ''};
  selected_id;

  ngOnInit(){
    this.route.paramMap.subscribe((param:ParamMap) => {
     let id = parseInt(param.get('id'));
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
      console.log("Ocorreu um erro", error);
     }
    );
  }
}
