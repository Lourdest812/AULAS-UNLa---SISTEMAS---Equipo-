import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MenuChangeEvent } from '../interfaces/layout-interfaces-config';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuSource: Subject<MenuChangeEvent> = new Subject<MenuChangeEvent>();
  private resetSource: Subject<unknown> = new Subject();

  public menuSource$: Observable<MenuChangeEvent> = this.menuSource.asObservable();
  public resetSource$: Observable<unknown> = this.resetSource.asObservable();

  public onMenuStateChange(event: MenuChangeEvent){
    this.menuSource.next(event);
  }

  reset(){
    this.resetSource.next(true);
  }
}
