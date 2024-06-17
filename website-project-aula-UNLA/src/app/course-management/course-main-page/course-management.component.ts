import { Component, OnInit } from '@angular/core';
import { CourseService } from '../service/course.service';
import { Course } from '../model/course';
import { MessageService, ConfirmationService } from 'primeng/api';
import { DialogEventResponse } from '../../shared/shared-class/dialogEventResponse';
import { Student } from '../../student-admnistration/model/student';
import { Teacher } from '../../teacher-administration/model/teacher';

@Component({
  selector: 'app-course-management',
  templateUrl: './course-management.component.html',
  styleUrl: './course-management.component.css'
})
export class CourseManagementComponent implements OnInit {

  public courses!: Course[];

  public seletedCourses: Course[] = [];

  // Para el modal del crud
  public visibleModal: boolean = false;

  public detailStudents!: Student[];

  public detailTeachers!: Teacher[];

  public visibleModalDetailStudent: boolean = false;

  public visibleModalDetailTeacher: boolean = false;

  public courseElement: Course = new Course();

  //Estilos para Dialog de formulario de cursos
  public dialogStyles = {
    width: '40vw',
  };

  // Estilos para el dialog de detalles de alumnos y profesores
  public dialogDetails = {
    with: '50vw'
  }

  public messageConfirmation = {
    padding: '0.2rem',
  }

  constructor(
    private courseService: CourseService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.loadCourseList();
  }


   /*Metodo encargado de agregar la condicion de cuando una fila es seleccionable */
  public isRowSelectable(row: { data: any; index: number; }): boolean {
    const course: Course = row.data;
    return course.oid !== null;
  }


  /*Metodo Crud encargado de crear un nuevo curso */
  public createCourse(): void {
    this.courseService.createCourse(this.courseElement).subscribe({
      next: () => {
        this.creationSuccessMessage();
        this.loadCourseList();
        this.courseElement = new Course(); //Reseto del elemento.
      }, error: () =>{
        this.errorMessage();
      }
    })
  }

   /*Metodo encargado de hacer un update al profesor que se haya seleccionado de la tabla */
   public updateCourse(): void {
    this.courseService.updateCourse(this.courseElement).subscribe({
      next: () => {
        this.updateSuccesMessage();
        this.loadCourseList();
      }, error: () => {
        this.errorMessage();
      }
    })
  }

  /*Metodo Crud encargado de elminar los cursos seleccionados */
  public deleteCourses(event: Event): void {

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
        let oids: number[] = this.seletedCourses.map(value => value.oid);
        this.courseService.deleteCourses(oids).subscribe({
          next: () => {
            this.messageService.add({ severity: 'info', summary: 'Operacion Confirmada', detail: 'Cursos eliminados con exito', life: 100000});
            this.seletedCourses = [];
            this.courseElement = new Course();
            this.loadCourseList();
          },
          error: () => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Ocurrió un error al eliminar los cursos' });
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
    this.messageService.add({ severity: 'success', summary: 'Operacion Exitosa', detail: 'El curso fue creado con exito' });
  }

  // Muestra mensaje de que ocurrio un error al querer hacer una operacion del CRUD.
  private errorMessage(): void {
    this.messageService.add({ severity: 'error', summary: 'Operacion fallida', detail: 'Ocurrio un problema en la operacion' });
  }

  // Muestra mensaje de que la operacion de update salio con exito.
  private updateSuccesMessage(): void {
    this.messageService.add({ severity: 'success', summary: 'Operacion Exitosa', detail: 'El curso fue actualizado con exito', styleClass:'custom-success-operation' });
  }

  // Metodo encargado de recibir el Ouput de course-formComponent. Se fija el valor del elemento y dependiendo
  // los datos que tenga se hace una operacion update o create
  public recieveDialogEvent($event: DialogEventResponse): void {
    if (this.courseElement !== null && this.courseElement !== undefined && $event.eventCancel != true) {

      if (this.courseElement.oid == null) {
        this.createCourse();
      } else {
        this.updateCourse();
      }

    }
    this.visibleModal = $event.closeDialog;
  }

  // Metodo encargado de mostrar el dialog para el formulario del crud
  public showDialog(): void {
    this.visibleModal = true;
  }

  public recieveDialogEventStudent($event: DialogEventResponse): void{
    this.visibleModalDetailStudent = $event.closeDialog;
  }

  public recieveDialogEventTeacher($event: DialogEventResponse): void{
    this.visibleModalDetailTeacher = $event.closeDialog;
  }

  //Metodo encargado de cargar la tabla con la informacion de profesores
  public loadCourseList(): void {
    this.courseService.getCourses().subscribe({
      next: (value: Course[]) => {
        this.courses = value;
      }
    })
  }

  /*
    Se utiliza para que cuando se quiera hacer un update se pase bien la referencia al formulario
    del objeto que se quiere modificar
  */
  public onSelectionChange($event: Course[]): void{
    if ($event[0] !== undefined) {
      this.courseElement = $event[0];
    } else {
      this.courseElement = new Course();
    }
  }

  public detailsStudent(students: Student[]): void{
    this.detailStudents = students;
    this.visibleModalDetailStudent = true;
  }

  public detailsTeacher(teachers: Teacher[]): void{
    this.detailTeachers = teachers;
    this.visibleModalDetailTeacher = true;
  }
}
