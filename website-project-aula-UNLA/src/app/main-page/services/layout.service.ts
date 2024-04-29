import { Injectable, effect, signal } from '@angular/core';
import { AppConfig, LayoutState } from '../interfaces/layout-interfaces-config';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {

  private configUpdate = new Subject<AppConfig>();

  private overlayOpen = new Subject<any>();

  public _config: AppConfig = {
    ripple: false,
    inputStyle: 'outlined',
    menuMode: 'static',
    colorScheme: 'dark',
    theme: 'md-dark-indigo',
    scale: 14,
  };

  public config = signal<AppConfig>(this._config);

  public state: LayoutState = {
    staticMenuDesktopInactive: false,
    overlayMenuActive: false,
    profileSidebarVisible: false,
    configSidebarVisible: false,
    staticMenuMobileActive: false,
    menuHoverActive: false,
  };

  public configUpdate$ = this.configUpdate.asObservable();

  public overlayOpen$ = this.overlayOpen.asObservable();

  constructor() {
    effect(() => {
      const config: AppConfig = this.config();
      if (this.updateStyle(config)) {
        this.changeTheme();
      }
      this.changeScale(config.scale);
      this.onConfigUpdate();
    });
  }

  public updateStyle(config: AppConfig): boolean {
    return (
      config.theme !== this._config.theme ||
      config.colorScheme !== this._config.colorScheme
    );
  }

  // Busca si se cambio la configuracion del theme para modificarlo en el archivo index del DOOM
  public changeTheme() {
    const config: AppConfig = this.config();
    const themeLink: HTMLLinkElement = <HTMLLinkElement>(document.getElementById('theme-css'));
    const themeLinkHref: String = themeLink.getAttribute('href')!;

    const newHref = themeLinkHref
      .split('/')
      .map((el) =>
        el == this._config.theme
          ? (el = config.theme)
          : el == `theme-${this._config.colorScheme}`
          ? (el = `theme-${config.colorScheme}`)
          : el
      )
      .join('/');

    this.replaceThemeLink(newHref);
  }

  public replaceThemeLink(href: string): void {
    const id: string = 'theme-css';
    let themeLink = <HTMLLinkElement>document.getElementById(id);
    const cloneLinkElement = <HTMLLinkElement>themeLink.cloneNode(true);

    cloneLinkElement.setAttribute('href', href);

    // Cambio ID del elemento clonado para evitar conflictos de ID en el DOOM
    cloneLinkElement.setAttribute('id', id + '-clone');

    // Inserta el elemento clonado en el DOM justo despues del elemento <link>
    themeLink.parentNode!.insertBefore(cloneLinkElement, themeLink.nextSibling);

    // Se pone un listener para que una ves se carga el elemento clonado se elimino <link> original del DOM ya que el nuevo theme
    // esta en el clonado y luesto se cambia el ID del clonado al ID que tenia el original asi se mantienen la consistencia del nuevo ID
    cloneLinkElement.addEventListener('load', () => {
      themeLink.remove();
      cloneLinkElement.setAttribute('id', id);
    });
  }

  public onConfigUpdate(): void {
    this._config = { ...this.config() };
    this.configUpdate.next(this.config());
  }

  public changeScale(value: number): void {
    document.documentElement.style.fontSize = `${value}px`;
  }

  public onMenuToggle(): void {
    if (this.isOverlay()) {
      this.state.overlayMenuActive = !this.state.overlayMenuActive;
      if (this.state.overlayMenuActive) {
        this.overlayOpen.next(null);
      }
    }

    if (this.isDesktop()) {
      this.state.staticMenuDesktopInactive = !this.state.staticMenuDesktopInactive;
    } else {
      this.state.staticMenuMobileActive = !this.state.staticMenuMobileActive;

      if (this.state.staticMenuMobileActive) {
        this.overlayOpen.next(null);
      }
    }
  }

  public isDesktop(): boolean {
    return window.innerWidth > 991;
  }

  public isOverlay(): boolean {
    return this.config().menuMode === 'overlay';
  }

  public showProfileSidebar(): void {
    this.state.profileSidebarVisible = !this.state.profileSidebarVisible;
    if (this.state.profileSidebarVisible) {
      this.overlayOpen.next(null);
    }
  }

  public showConfigSidebar(): void {
    this.state.configSidebarVisible = true;
  }
}
