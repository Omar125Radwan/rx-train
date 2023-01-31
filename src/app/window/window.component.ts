import { Component, OnInit } from '@angular/core';
import { interval, fromEvent, EMPTY } from 'rxjs';
import { take, windowWhen,
  windowTime, windowCount, windowToggle,
  window,
  tap, mergeAll } from 'rxjs/operators';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    interval(1000).pipe(take(9))
    .subscribe(val => console.log(val));
    const data$ = fromEvent(document, 'click')
    .pipe(
      // window(interval(3000).pipe(take(3))),
      // windowWhen(() => interval(3000)),
      // windowTime(1000, 4000, 2),
      // windowCount(2, 4),
      windowToggle(interval(3000),
      i => (i === 3 ? interval(1000): EMPTY)),
      tap(_=>console.log('==== New Window ====')),
      take(5),
      mergeAll()
    )
    .subscribe(event => console.log('clicked'));
  }

}
