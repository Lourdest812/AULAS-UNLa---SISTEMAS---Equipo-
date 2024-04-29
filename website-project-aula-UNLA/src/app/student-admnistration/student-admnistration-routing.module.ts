import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentMainPageComponent } from './student-main-page/student-main-page.component';

const routes: Routes = [
  {
    path: '',
    component: StudentMainPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentAdmnistrationRoutingModule { }
