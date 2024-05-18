import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherAdministrationComponent } from './teacher-main-page/teacher-administration.component';
import { TeacherAdministrationRoutingModule } from './teacher-administration-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'primeng/api';


@NgModule({
  declarations: [TeacherAdministrationComponent],
  imports: [
    CommonModule,
    TeacherAdministrationRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class TeacherAdministrationModule { }
