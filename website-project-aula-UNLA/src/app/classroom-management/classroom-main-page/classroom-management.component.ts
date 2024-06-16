import { Component, OnInit } from '@angular/core';
import { Classroom } from '../model/classroom';
import { ClassroomService } from '../service/classroom.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { DialogEventResponse } from '../../shared/shared-class/dialogEventResponse';
import { Teacher } from '../../teacher-administration/model/teacher';

@Component({
  selector: 'app-classroom-management',
  templateUrl: './classroom-management.component.html',
  styleUrl: './classroom-management.component.css'
})
export class ClassroomManagementComponent implements OnInit {

  public classrooms!: Classroom[];

  public seletedClassrooms: Classroom[] = [];

  public visibleModal: boolean = false;

  public classroomElement: Classroom = new Classroom();

  //Estilos para Dialog de formulario de estudiantes
  public dialogStyles = {
    width: '30vw',
  };

  public messageConfirmation = {
    padding: '0.2rem',
  }

  constructor(
    private classroomService: ClassroomService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.loadClassroomList();
  }


  /*Metodo encargado de agregar la condicion de cuando una fila es seleccionable */
  isRowSelectable(row: { data: any; index: number; }): boolean {
    const classroom: Classroom = row.data;
    return classroom.oid !== null;
  }


  /*Metodo Crud encargado de crear una nueva aula */
  public createClassroom(): void {

    this.classroomService.createClassroom(this.classroomElement).subscribe({
      next: () => {
        this.creationSuccessMessage();
        this.loadClassroomList();
        this.classroomElement = new Classroom(); //Reseto del elemento.
      }, error: () =>{
        this.errorMessage();
      }
    })

  }

  /*Metodo encargado de hacer un update al aula que se haya seleccionado de la tabla */
  public updateClassroom(): void {
    this.classroomService.updateClassroom(this.classroomElement).subscribe({
      next: () => {
        this.updateSuccesMessage();
        this.loadClassroomList();
      }, error: () => {
        this.errorMessage();
      }
    })
  }

  /*Metodo Crud encargado de elminar las aulas seleccionadas */
  public deleteClassrooms(event: Event): void {

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
        let oids: number[] = this.seletedClassrooms.map(value => value.oid);
        this.classroomService.deleteClassrooms(oids).subscribe({
          next: () => {
            this.messageService.add({ severity: 'info', summary: 'Operacion Confirmada', detail: 'Aulas eliminadas con exito', life: 100000});
            this.seletedClassrooms = [];
            this.classroomElement = new Classroom();
            this.loadClassroomList();
          },
          error: () => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Ocurrió un error al eliminar las aulas' });
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
    this.messageService.add({ severity: 'success', summary: 'Operacion Exitosa', detail: 'El aula fue creado con exito' });
  }

  // Muestra mensaje de que ocurrio un error al querer hacer una operacion del CRUD.
  private errorMessage(): void {
    this.messageService.add({ severity: 'error', summary: 'Operacion fallida', detail: 'Ocurrio un problema en la operacion' });
  }

  // Muestra mensaje de que la operacion de update salio con exito.
  private updateSuccesMessage(): void {
    this.messageService.add({ severity: 'success', summary: 'Operacion Exitosa', detail: 'El aula fue actualizado con exito', styleClass:'custom-success-operation' });
  }

  // Metodo encargado de recibir el Ouput de classroom-formComponent. Se fija el valor del elemento y dependiendo
  // los datos que tenga se hace una operacion update o create
  public recieveDialogEvent($event: DialogEventResponse): void {
    if (this.classroomElement !== null && this.classroomElement !== undefined && $event.eventCancel != true) {

      if (this.classroomElement.oid == null) {
        this.createClassroom();
      } else {
        this.updateClassroom();
      }

    }
    this.visibleModal = $event.closeDialog;
  }

  // Metodo encargado de mostrar el dialog para el formulario del crud
  public showDialog(): void {
    this.visibleModal = true;
  }

  //Metodo encargado de cargar la tabla con la informacion de profesores
  public loadClassroomList(): void {
    this.classroomService.getClassrooms().subscribe({
      next: (value: Classroom[]) => {
        this.classrooms = value;
      }
    })
  }

  /*
    Se utiliza para que cuando se quiera hacer un update se pase bien la referencia al formulario
    del objeto que se quiere modificar
  */
  public onSelectionChange($event: Classroom[]) {
    if ($event[0] !== undefined) {
      this.classroomElement = $event[0];
    } else {
      this.classroomElement = new Classroom();
    }
  }
}
