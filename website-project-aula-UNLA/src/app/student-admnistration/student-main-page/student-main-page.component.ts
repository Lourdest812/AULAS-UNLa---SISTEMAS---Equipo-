import { Component, OnInit, effect, signal } from '@angular/core';
import { StudentService } from '../service/student.service';
import { Student } from '../model/student';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TableRowSelectEvent } from 'primeng/table';
import { DialogEventResponse } from '../../shared/shared-class/dialogEventResponse';


@Component({
  selector: 'app-student-main-page',
  templateUrl: './student-main-page.component.html',
  styleUrl: './student-main-page.component.css'
})
export class StudentMainPageComponent implements OnInit {

  public students!: Student[];

  public seletedStudents: Student[] = [];

  public visibleModal: boolean = false;

  public studentElement: Student = new Student();

  //Estilos para Dialog de formulario de estudiantes
  public dialogStyles = {
    width: '30vw',
  };

  public messageConfirmation = {
    padding: '0.2rem',
  }

  constructor(
    private studentService: StudentService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.loadStudentList();
  }

   /*Metodo encargado de agregar la condicion de cuando una fila es seleccionable */
  public isRowSelectable(row: { data: any; index: number; }): boolean {
    const student: Student = row.data;
    return student.oid !== null;
  }


  /*Metodo Crud encargado de crear un nuvo estudiante */
  public createStudent(): void {

    this.studentService.createStudent(this.studentElement).subscribe({
      next: () => {
        this.creationSuccessMessage();
        this.loadStudentList();
        this.studentElement = new Student(); //Reseto del elemento.
      }, error: () =>{
        this.errorMessage();
      }
    })

  }

  /*Metodo encargado de hacer un update al estudiante que se haya seleccionado de la tabla */
  public updateStudent(): void {
    this.studentService.updateStudent(this.studentElement).subscribe({
      next: () => {
        this.updateSuccesMessage();
        this.loadStudentList();
      }, error: () => {
        this.errorMessage();
      }
    })
  }

  /*Metodo Crud encargado de elminar los estudiantes seleccionados */
  public deleteStudents(event: Event): void {

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
        let oids: number[] = this.seletedStudents.map(value => value.oid);
        this.studentService.deleteStudents(oids).subscribe({
          next: () => {
            this.messageService.add({ severity: 'info', summary: 'Operacion Confirmada', detail: 'Alumnos eliminados con exito', life: 1000000});
            this.seletedStudents = [];
            this.studentElement = new Student();
            this.loadStudentList();
          },
          error: () => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Ocurrió un error al eliminar los alumnos' });
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
    this.messageService.add({ severity: 'success', summary: 'Operacion Exitosa', detail: 'El estudiante fue creado con exito' });
  }

  // Muestra mensaje de que ocurrio un error al querer hacer una operacion del CRUD.
  private errorMessage(): void {
    this.messageService.add({ severity: 'error', summary: 'Operacion fallida', detail: 'Ocurrio un problema en la operacion' });
  }

  // Muestra mensaje de que la operacion de update salio con exito.
  private updateSuccesMessage(): void {
    this.messageService.add({ severity: 'success', summary: 'Operacion Exitosa', detail: 'El estudiante fue actualizado con exito', styleClass:'custom-success-operation' });
  }

  // Metodo encargado de recibir el Ouput de Student-formComponent. Se fija el valor del elemento y dependiendo
  // los datos que tenga se hace una operacion update o create
  public recieveDialogEvent($event: DialogEventResponse): void {
    if (this.studentElement !== null && this.studentElement !== undefined && $event.eventCancel != true) {

      if (this.studentElement.oid == null) {
        this.createStudent();
      } else {
        this.updateStudent();
      }

    }
    this.visibleModal = $event.closeDialog;
  }

  // Metodo encargado de mostrar el dialog para el formulario del crud
  public showDialog(): void {
    this.visibleModal = true;
  }

  //Metodo encargado de cargar la tabla con la informacion de estudiantes
  public loadStudentList(): void {
    this.studentService.getStudents().subscribe({
      next: (value: Student[]) => {
        this.students = value;
      }
    })
  }

  /*
    Se utiliza para que cuando se quiera hacer un update se pase bien la referencia al formulario
    del objeto que se quiere modificar
  */
  public onSelectionChange($event: Student[]) {
    if ($event[0] !== undefined) {
      this.studentElement = $event[0];
    } else {
      this.studentElement = new Student();
    }
  }


}
