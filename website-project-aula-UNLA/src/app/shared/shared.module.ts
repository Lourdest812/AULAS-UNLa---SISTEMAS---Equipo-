import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import PrimeNG modules
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    AvatarModule,
    AvatarGroupModule,
    TableModule,
    DialogModule,
    InputNumberModule,
    DividerModule,
    MessagesModule,
    ToastModule,
    ConfirmDialogModule

  ],
  exports: [
    ButtonModule,
    AvatarModule,
    AvatarGroupModule,
    TableModule,
    DialogModule,
    InputNumberModule,
    InputTextModule,
    DividerModule,
    MessagesModule,
    ToastModule,
    ConfirmDialogModule
  ]
})
export class SharedModule { }
