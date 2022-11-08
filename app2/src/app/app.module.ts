import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DeptsComponent } from './depts/depts.component';
import { DeptFormComponent } from './dept-form/dept-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DeptsComponent,
    DeptFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
