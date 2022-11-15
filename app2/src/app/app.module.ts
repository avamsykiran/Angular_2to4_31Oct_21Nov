import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DeptsComponent } from './depts/depts.component';
import { DeptFormComponent } from './dept-form/dept-form.component';
import { DeptRowComponent } from './dept-row/dept-row.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EmpsComponent } from './emps/emps.component';
import { EmpsListComponent } from './emps-list/emps-list.component';
import { EmpsFormComponent } from './emps-form/emps-form.component';

const routes : Routes = [
  {path:'',pathMatch:'full',redirectTo:'/about'},
  {path:'about',component:AboutUsComponent},
  {path:'depts',component:DeptsComponent},
  {path:'emps/:deptId',component:EmpsComponent,children:[
    {path:'',pathMatch:'full',redirectTo:'list'},
    {path:'list',component:EmpsListComponent},
    {path:'add',component:EmpsFormComponent},
    {path:'edit/:empId',component:EmpsFormComponent}
  ]}
];

@NgModule({
  declarations: [
    AppComponent,
    DeptsComponent,
    DeptFormComponent,
    DeptRowComponent,
    AboutUsComponent,
    EmpsComponent,
    EmpsListComponent,
    EmpsFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
