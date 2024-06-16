import { Component, OnInit } from '@angular/core';
import { Teacher } from '../model/teacher';
import { MessageService, ConfirmationService } from 'primeng/api';
import { TeacherService } from '../service/teacher.service';
import { DialogEventResponse } from '../../shared/shared-class/dialogEventResponse';

@Component({
  selector: 'app-teacher-administration',
  templateUrl: './teacher-administration.component.html',
  styleUrl: './teacher-administration.component.css'
})
export class TeacherAdministrationComponent implements OnInit {

  public teachers!: Teacher[];

  public seletedTeachers: Teacher[] = [];

  public visibleModal: boolean = false;

  public teacherElement: Teacher = new Teacher();

  //Estilos para Dialog de formulario de estudiantes
  public dialogStyles = {
    width: '30vw',
  };

  public messageConfirmation = {
    padding: '0.2rem',
  }

  constructor(
    private teacherService: TeacherService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.loadTeacherList();
  }


  /*Metodo encargado de agregar la condicion de cuando una fila es seleccionable */
  isRowSelectable(row: { data: any; index: number; }): boolean {
    const teacher: Teacher = row.data;
    return teacher.oid !== null;
  }

  /*Metodo Crud encargado de crear un nuevo profesor */
  public createTeacher(): void {

    this.teacherService.createTeacher(this.teacherElement).subscribe({
      next: () => {
        this.creationSuccessMessage();
        this.loadTeacherList();
        this.teacherElement = new Teacher(); //Reseto del elemento.
      }, error: () =>{
        this.errorMessage();
      }
    })

  }

  /*Metodo encargado de hacer un update al profesor que se haya seleccionado de la tabla */
  public updateTeacher(): void {
    this.teacherService.updateTeacher(this.teacherElement).subscribe({
      next: () => {
        this.updateSuccesMessage();
        this.loadTeacherList();
      }, error: () => {
        this.errorMessage();
      }
    })
  }

  /*Metodo Crud encargado de elminar los profesores seleccionados */
  public deleteTeachers(event: Event): void {

    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Esta seguro que quiere eliminar las entidades seleccionadas?, recuerde una ves eliminada no podra recuperarlas',
      header: 'Confirmar eliminacion de Estudiantes',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: "p-button-danger p-button-text",
      rejectButtonStyleClass: "p-button-text p-button-text",
      acceptIcon: "none",
      rejectIcon: "none",

      accept: () => {
        let oids: number[] = this.seletedTeachers.map(value => value.oid);
        this.teacherService.deleteTeachers(oids).subscribe({
          next: () => {
            this.messageService.add({ severity: 'info', summary: 'Operacion Confirmada', detail: 'Profesores eliminados con exito', life: 100000});
            this.seletedTeachers = [];
            this.teacherElement = new Teacher();
            this.loadTeacherList();
          },
          error: () => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Ocurrió un error al eliminar los profesores' });
          }
        })
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Cancelado', detail: 'Operacion cancelada' });
      }
    });
  }

  // Muestra mensaje de que la operacion creacion salio con exito.
  private creationSuccessMessage(): void {
    this.messageService.add({ severity: 'success', summary: 'Operacion Exitosa', detail: 'El profesor fue creado con exito' });
  }

  // Muestra mensaje de que ocurrio un error al querer hacer una operacion del CRUD.
  private errorMessage(): void {
    this.messageService.add({ severity: 'error', summary: 'Operacion fallida', detail: 'Ocurrio un problema en la operacion' });
  }

  // Muestra mensaje de que la operacion de update salio con exito.
  private updateSuccesMessage(): void {
    this.messageService.add({ severity: 'success', summary: 'Operacion Exitosa', detail: 'El profesor fue actualizado con exito', styleClass:'custom-success-operation' });
  }

  // Metodo encargado de recibir el Ouput de teacher-formComponent. Se fija el valor del elemento y dependiendo
  // los datos que tenga se hace una operacion update o create
  public recieveDialogEvent($event: DialogEventResponse): void {
    if (this.teacherElement !== null && this.teacherElement !== undefined && $event.eventCancel != true) {

      if (this.teacherElement.oid == null) {
        this.createTeacher();
      } else {
        this.updateTeacher();
      }

    }
    this.visibleModal = $event.closeDialog;
  }

  // Metodo encargado de mostrar el dialog para el formulario del crud
  public showDialog(): void {
    this.visibleModal = true;
  }

  //Metodo encargado de cargar la tabla con la informacion de profesores
  public loadTeacherList(): void {
    this.teacherService.getTeachers().subscribe({
      next: (value: Teacher[]) => {
        this.teachers = value;
      }
    })
  }

  /*
    Se utiliza para que cuando se quiera hacer un update se pase bien la referencia al formulario
    del objeto que se quiere modificar
  */
  public onSelectionChange($event: Teacher[]) {
    if ($event[0] !== undefined) {
      this.teacherElement = $event[0];
    } else {
      this.teacherElement = new Teacher();
    }
  }

}
