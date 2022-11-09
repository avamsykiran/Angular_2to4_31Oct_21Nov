import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DeptsComponent } from './depts/depts.component';
import { DeptFormComponent } from './dept-form/dept-form.component';
import { DeptRowComponent } from './dept-row/dept-row.component';

@NgModule({
  declarations: [
    AppComponent,
    DeptsComponent,
    DeptFormComponent,
    DeptRowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
