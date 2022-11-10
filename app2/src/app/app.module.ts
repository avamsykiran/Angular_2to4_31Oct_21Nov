import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DeptsComponent } from './depts/depts.component';
import { DeptFormComponent } from './dept-form/dept-form.component';
import { DeptRowComponent } from './dept-row/dept-row.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes : Routes = [
  {path:'',pathMatch:'full',redirectTo:'/about'},
  {path:'about',component:AboutUsComponent},
  {path:'depts',component:DeptsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DeptsComponent,
    DeptFormComponent,
    DeptRowComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
