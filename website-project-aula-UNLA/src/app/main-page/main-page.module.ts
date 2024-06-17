import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageRoutingModule } from './main-page-routing.module';

//Componentes
import { MainLayoutComponent } from './main-layout/main-layout.component';

// Import PrimeNG modules
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';

// Modulos del proyecto
import { SharedModule } from '../shared/shared.module';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MenuSidebarComponent } from './menu-sidebar-configuration/menu-sidebar/menu-sidebar.component';
import { MenuSidebarItemComponent } from './menu-sidebar-configuration/menu-sidebar-item/menu-sidebar-item.component';
import { FooterComponent } from './footer/footer.component';
import { ConfigMainMenuComponent } from './config-main-menu/config-main-menu.component';
import { SidebarContainerComponent } from './menu-sidebar-configuration/sidebar-container/sidebar-container.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../../auth.interceptor';


@NgModule({
  declarations: [
    MainLayoutComponent,
    MenuBarComponent,
    MenuSidebarComponent,
    MenuSidebarItemComponent,
    FooterComponent,
    ConfigMainMenuComponent,
    SidebarContainerComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    SidebarModule,
    MenubarModule,
    SharedModule,
    RadioButtonModule,
    InputSwitchModule,
    FormsModule
  ],

})
export class MainPageModule { }
