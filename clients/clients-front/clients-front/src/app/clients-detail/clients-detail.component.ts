import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-clients-detail',
  templateUrl: './clients-detail.component.html',
  styleUrls: ['./clients-detail.component.css']
})
export class ClientsDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private api:ApiService) { }
  selected_client = {name: '', surname: ''};

  ngOnInit(): void {
    this.loadClient();
  }

  loadClient(){
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    this.api.getClient(id).subscribe(
      data => {
        console.log(data);
        this.selected_client = data;
      },
     error =>{
      console.log("Ocorreu um erro", error);
     }
    );
  }

}
