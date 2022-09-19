import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsDetailComponent } from './clients-detail/clients-detail.component';
import { NewClientComponent } from './new-client/new-client.component';

const routes: Routes = [
  {path: 'client-detail/:id', component: ClientsDetailComponent},
  {path: 'new-client', component: NewClientComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ClientsDetailComponent,]
