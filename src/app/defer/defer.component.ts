import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { defer, fromEvent, interval, of } from 'rxjs';
import { tap, switchMapTo, take } from 'rxjs/operators';

@Component({
  selector: 'app-defer',
  templateUrl: './defer.component.html',
  styleUrls: ['./defer.component.scss']
})
export class DeferComponent implements OnInit {

  @ViewChild('button', {static: true}) buttonEl!: ElementRef<HTMLButtonElement>;
  clicks$ = defer(() =>
    fromEvent(this.buttonEl.nativeElement, 'click')
    .pipe(
      tap(() => console.log('clicked'))
    )
  )
  obs1$ = interval(1000)
  .pipe(
    switchMapTo(of(Math.floor(Math.random() * 10))),
    take(10)
  );
  obs2$ = interval(1000)
  .pipe(
    switchMapTo(defer(() => of(Math.floor(Math.random() * 10)))),
    take(10)
  );
  ngOnInit(): void {
    this.clicks$.subscribe();
  }

}
