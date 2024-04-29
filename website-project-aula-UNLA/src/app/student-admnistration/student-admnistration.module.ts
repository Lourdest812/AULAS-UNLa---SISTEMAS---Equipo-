import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentAdmnistrationRoutingModule } from './student-admnistration-routing.module';
import { StudentMainPageComponent } from './student-main-page/student-main-page.component';
import { SharedModule } from '../shared/shared.module';
import { StudentFormComponent } from './student-form/student-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StudentMainPageComponent,
    StudentFormComponent
  ],
  imports: [
    CommonModule,
    StudentAdmnistrationRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class StudentAdmnistrationModule { }
