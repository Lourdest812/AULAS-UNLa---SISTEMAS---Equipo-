import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseManagementRoutingModule } from './course-management-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'primeng/api';
import { CourseManagementComponent } from './course-main-page/course-management.component';

@NgModule({
  declarations: [CourseManagementComponent],
  imports: [
    CommonModule,
   CourseManagementRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CourseManagementModule { }
