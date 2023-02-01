import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  defer, interval, of, Observable,
  fromEvent, EMPTY, timer,
  range, generate, iif,
  merge, concat, Subject,
  GroupedObservable,
  BehaviorSubject,
  partition,
  Notification,
  from,
  Timestamp,
  ConnectableObservable,
  combineLatest,
  forkJoin
} from 'rxjs';
import {
  map, take, tap,
  switchMapTo, pluck, mapTo,
  buffer, bufferWhen, bufferTime,
  startWith, bufferCount, bufferToggle,
  exhaust, exhaustMap,
  expand, mergeMap, groupBy,
  reduce, scan, mergeScan, pairwise,
  window, windowWhen, windowTime, windowCount, windowToggle,
  takeUntil, count,
  skip, skipLast, skipUntil, skipWhile,
  audit, share, throttle, debounce,
  distinct, distinctUntilChanged, distinctUntilKeyChanged,
  elementAt, filter, ignoreElements,
  sample, sampleTime,
  single,
  delay, delayWhen,
  materialize, dematerialize,
  timeInterval, timeout, timeoutWith, timestamp,
  toArray, defaultIfEmpty, isEmpty, every, find, findIndex,
  combineAll, concatAll, mergeAll, withLatestFrom, publish, refCount, publishLast, publishReplay, shareReplay, publishBehavior, switchMap, concatMap

} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'rx-train';
  // writer: any;
  ngOnInit(): void {
    /* const letters$ = of('a', 'b', 'c');
    const numbers$ = of(1, 2, 3);
    letters$.pipe(
      mergeMap(letter => {
        return numbers$.pipe(
          map(numberEl => letter + numberEl)
        )
      })
    ).subscribe(console.log) */
    /* const letters$ = of('a', 'b', 'c');
    const numbers$ = of(1, 2, 3);
    letters$.pipe(
      switchMap(letter => {
        return numbers$.pipe(
          map(numberEl => letter + numberEl)
        )
      })
    ).subscribe(console.log) */
    /* const click = fromEvent(document, 'click');
    click.pipe(
      switchMap(() => {
        return interval(1000);
      })
    ).subscribe((x) => {console.log(x)}) */
    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(
      exhaustMap(ev => interval(1000).pipe(take(4)))
    );
    result.subscribe(x => console.log(x));
    /* const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(
      exhaustMap(() => interval(1000).pipe(take(5)))
    );
    result.subscribe(x => console.log(x)); */
  }
}


