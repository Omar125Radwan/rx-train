import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { debounce } from 'rxjs/operators';

@Component({
  selector: 'app-audit-throttle-debounce',
  templateUrl: './audit-throttle-debounce.component.html',
  styleUrls: ['./audit-throttle-debounce.component.scss']
})
export class AuditThrottleDebounceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    fromEvent(document, 'click')
    .pipe(
      debounce(() => ajax('https://jsonplaceholder.typicode.com/todos/1'))
    ).subscribe(console.log)
  }

}
