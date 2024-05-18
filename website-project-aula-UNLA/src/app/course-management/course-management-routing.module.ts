import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { CourseManagementComponent } from './course-main-page/course-management.component';

const routes: Routes = [
  {
    path: '',
    component: CourseManagementComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CourseManagementRoutingModule { }
