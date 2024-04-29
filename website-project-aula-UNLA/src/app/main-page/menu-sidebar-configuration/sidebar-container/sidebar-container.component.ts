import { Component, ElementRef } from '@angular/core';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'sidebar-container',
  templateUrl: './sidebar-container.component.html',
  styleUrl: './sidebar-container.component.css'
})
export class SidebarContainerComponent {

  constructor(public layoutservice: LayoutService, public elementRef: ElementRef){}
}
