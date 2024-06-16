import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TeacherAdministrationComponent } from './teacher-main-page/teacher-administration.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherAdministrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherAdministrationRoutingModule { }
