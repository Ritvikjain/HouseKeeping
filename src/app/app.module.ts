import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddassetsComponent } from './addassets/addassets.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { AddworkerComponent } from './addworker/addworker.component';
import { AllocatetaskComponent } from './allocatetask/allocatetask.component';
import { GetworkerComponent } from './getworker/getworker.component';

@NgModule({
  declarations: [
    AppComponent,
    AddassetsComponent,
    AddtaskComponent,
    AddworkerComponent,
    AllocatetaskComponent,
    GetworkerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
