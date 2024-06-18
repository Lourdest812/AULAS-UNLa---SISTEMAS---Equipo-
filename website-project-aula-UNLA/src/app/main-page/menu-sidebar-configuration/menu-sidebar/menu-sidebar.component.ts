import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrl: './menu-sidebar.component.css'
})
export class MenuSidebarComponent implements OnInit {

  model: any[] = [];
  role: string;

  constructor(public layoutService: LayoutService, public tokenService: TokenService) {
    this.role = this.tokenService.getRole();
  }

  ngOnInit(): void {
    this.model = [
      {
        label: 'Home',
        items: [
          { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'], roles: ['ADMIN', 'STUDENT', 'TEACHER'] }
        ]
      },
      {
        label: 'Administración de Personal',
        items: [
          { label: 'Alumnos', icon: 'pi pi-fw pi-id-card', routerLink: ['/dashboard/student-administration'],  roles: ["ADMIN", "STUDENT"]},
          { label: 'Docentes', icon: 'pi pi-fw pi-users', routerLink: ['/dashboard/teacher-administration',],  roles: ["ADMIN"] },
        ]
      },
      {
        label: 'Gestión de Recursos',
        items: [
          { label: 'Aulas', icon: 'pi pi-fw pi-building', routerLink: ['/dashboard/classroom-management'],  roles: ["ADMIN", "TEACHER"] },
          { label: 'Materias', icon: 'pi pi-fw pi-book', routerLink: ['/dashboard/course-management'], roles: ["ADMIN", "STUDENT", "TEACHER"] },
        ]
      }
    ]

    console.log(this.role);
  }

  hasRole(roles: string[]): boolean {
    console.log('Checking role:', this.role, 'against', roles);

    if (!roles) {
      return false;
    }
    console.log(this.role)
    console.log(roles.includes(this.role))
    return roles.includes(this.role);
  }
}
