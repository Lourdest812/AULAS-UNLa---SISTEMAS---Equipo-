import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassroomManagementComponent } from './classroom-main-page/classroom-management.component';
import { ClassroomManagementRoutingModule } from './classroom-management-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ClassroomFormComponent } from './classroom-form/classroom-form.component';
import { MessageService, ConfirmationService } from 'primeng/api';
import { CheckboxModule } from 'primeng/checkbox';




@NgModule({
  declarations: [ClassroomManagementComponent, ClassroomFormComponent],
  imports: [
    CommonModule,
    ClassroomManagementRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    CheckboxModule
  ],
  providers: [
    MessageService,
    ConfirmationService
  ]
})
export class ClassroomManagementModule { }
