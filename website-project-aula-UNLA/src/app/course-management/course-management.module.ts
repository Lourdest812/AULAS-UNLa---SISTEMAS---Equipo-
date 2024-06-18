import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseManagementRoutingModule } from './course-management-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseManagementComponent } from './course-main-page/course-management.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SharedModule } from '../shared/shared.module';
import { MessageService, ConfirmationService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { PickListModule } from 'primeng/picklist';
import { DragDropModule } from 'primeng/dragdrop';
import { PanelModule } from 'primeng/panel';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { TeacherDetailComponent } from './teacher-detail/teacher-detail.component';
import { EnumValuePipe } from './pipe/enum-value.pipe';




@NgModule({
  declarations: [CourseManagementComponent, CourseFormComponent, StudentDetailComponent, TeacherDetailComponent, EnumValuePipe],
  imports: [
    CommonModule,
    CourseManagementRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    DropdownModule,
    DragDropModule,
    PickListModule,
    PanelModule
  ],
  providers: [
    MessageService,
    ConfirmationService
  ]
})
export class CourseManagementModule { }
