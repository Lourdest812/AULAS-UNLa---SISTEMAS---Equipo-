import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassroomManagementComponent } from './classroom-main-page/classroom-management.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ClassroomManagementComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ClassroomManagementRoutingModule { }
