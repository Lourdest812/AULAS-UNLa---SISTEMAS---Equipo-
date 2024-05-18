import { StudentAdmnistrationModule } from './../student-admnistration/student-admnistration.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'student-administration', loadChildren: () => import('../student-admnistration/student-admnistration.module').then(m => m.StudentAdmnistrationModule)},
      { path: 'teacher-administration', loadChildren: () => import('../teacher-administration/teacher-administration.module').then(m => m.TeacherAdministrationModule)},
      { path: 'course-management', loadChildren: () => import('../course-management/course-management.module').then(m => m.CourseManagementModule)},
      { path: 'classroom-management', loadChildren: () => import('../classroom-management/classroom-management.module').then(m => m.ClassroomManagementModule)},
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
