import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsDetailComponent } from './clients-detail/clients-detail.component';

const routes: Routes = [
  {path: 'client-detail/:id', component: ClientsDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ClientsDetailComponent,]
