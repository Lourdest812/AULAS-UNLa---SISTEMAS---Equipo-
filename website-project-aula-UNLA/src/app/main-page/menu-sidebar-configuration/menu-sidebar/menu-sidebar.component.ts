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
          { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
        ]
      },
      {
        label: 'Administracion de Alumnos',
        items: [
          { label: 'ABM de Alumnos', icon: 'pi pi-fw pi-id-card', routerLink: ['/mainPage/student-administration'] },
          { label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/'] },
          { label: 'Float Label', icon: 'pi pi-fw pi-bookmark', routerLink: ['/'] },
          { label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/'] },
          { label: 'Button', icon: 'pi pi-fw pi-box', routerLink: ['/'] },
          { label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/'] },
          { label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/'] },
          { label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/'] },
          { label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/'] },
          { label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/'] },
          { label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/'] },
          { label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/'], routerLinkActiveOptions: { paths: 'subset', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' } },
          { label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/'] },
          { label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/'] },
          { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/'] },
          { label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/'] }
        ]
      }
    ]

  }
}
