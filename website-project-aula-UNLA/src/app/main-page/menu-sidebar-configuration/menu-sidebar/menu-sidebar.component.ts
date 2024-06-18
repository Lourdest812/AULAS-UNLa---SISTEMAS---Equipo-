import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrl: './menu-sidebar.component.css'
})
export class MenuSidebarComponent implements OnInit {

  model: any[] = [];

  constructor(public layoutService: LayoutService) { }

  ngOnInit(): void {
    this.model = [
      {
        label: 'Home',
        items: [
          { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] }
        ]
      },
      {
        label: 'Administración de Personal',
        items: [
          { label: 'Alumnos', icon: 'pi pi-fw pi-id-card', routerLink: ['/dashboard/student-administration'] },
          { label: 'Docentes', icon: 'pi pi-fw pi-users', routerLink: ['/dashboard/teacher-administration'] },
        ]
      },
      {
        label: 'Gestión de Recursos',
        items: [
          { label: 'Aulas', icon: 'pi pi-fw pi-building', routerLink: ['/dashboard/classroom-management'] },
          { label: 'Materias', icon: 'pi pi-fw pi-book', routerLink: ['/dashboard/course-management'] },
        ]
      }
    ]

  }
}
