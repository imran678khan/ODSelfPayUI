import { ElementRef, EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {
  public toggleSidebar: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
