import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherAdministrationComponent } from './teacher-main-page/teacher-administration.component';
import { TeacherAdministrationRoutingModule } from './teacher-administration-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TeacherFormComponent } from './teacher-form/teacher-form.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [TeacherAdministrationComponent, TeacherFormComponent],
  imports: [
    CommonModule,
    TeacherAdministrationRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [
    MessageService,
    ConfirmationService
  ]
})
export class TeacherAdministrationModule { }
