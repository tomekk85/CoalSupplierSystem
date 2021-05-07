import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private isOpen = true;
  private value = new Subject<boolean>();

  constructor() {
  }

  toggle(): void {
    this.isOpen = !this.isOpen;
    this.value.next(this.isOpen);
  }

  getValue(): Observable<boolean> {
    return this.value.asObservable();
  }
}
