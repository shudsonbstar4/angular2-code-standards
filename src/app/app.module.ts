import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { DataTableComponent } from './data-table/data-table.component';
import { FormComponent } from './form/form.component';
import { FormService } from './form/form.service';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ToastModule.forRoot()
  ],
  providers: [
    FormService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
