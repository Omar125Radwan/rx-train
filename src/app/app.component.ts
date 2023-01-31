import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { defer, interval, of, Observable,
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
  forkJoin} from 'rxjs';
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
  combineAll, concatAll, mergeAll, withLatestFrom, publish, refCount, publishLast, publishReplay, shareReplay, publishBehavior

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
    of(
      { age: 4, name: 'Foo1' },
      { age: 7, name: 'Bar' },
      { age: 5, name: 'Foo2' },
      { age: 6, name: 'Foo3' }
    ).pipe(
      distinctUntilKeyChanged('name', (x, y) => x.substring(0, 3) === y.substring(0, 3))
    )
    .subscribe(x => console.log(x));
  }
}


