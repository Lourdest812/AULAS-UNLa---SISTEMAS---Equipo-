import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CourseManagementComponent } from './course-main-page/course-management.component';

const routes: Routes = [
  {
    path: '',
    component: CourseManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseManagementRoutingModule { }
