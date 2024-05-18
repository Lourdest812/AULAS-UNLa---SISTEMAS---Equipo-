import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassroomManagementComponent } from './classroom-main-page/classroom-management.component';
import { ClassroomManagementRoutingModule } from './classroom-management-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'primeng/api';



@NgModule({
  declarations: [ClassroomManagementComponent],
  imports: [
    CommonModule,
    ClassroomManagementRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ClassroomManagementModule { }
