import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicinesearchComponent } from './medicinesearch/medicinesearch.component';
import { MedicinesearchviewComponent } from './medicinesearchview/medicinesearchview.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {  NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    MedicinesearchComponent,
    MedicinesearchviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
