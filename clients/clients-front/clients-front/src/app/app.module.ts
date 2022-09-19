import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsDetailComponent } from './clients-detail/clients-detail.component';
import { FormsModule } from '@angular/forms';
import { NewClientComponent } from './new-client/new-client.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsDetailComponent,
    NewClientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
