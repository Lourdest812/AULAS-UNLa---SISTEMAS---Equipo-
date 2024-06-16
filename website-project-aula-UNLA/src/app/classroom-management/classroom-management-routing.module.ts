import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassroomManagementComponent } from './classroom-main-page/classroom-management.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ClassroomManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassroomManagementRoutingModule { }
