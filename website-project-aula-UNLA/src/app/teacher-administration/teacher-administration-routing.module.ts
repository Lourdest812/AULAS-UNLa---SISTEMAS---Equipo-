import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { TeacherAdministrationComponent } from './teacher-main-page/teacher-administration.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherAdministrationComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TeacherAdministrationRoutingModule { }
