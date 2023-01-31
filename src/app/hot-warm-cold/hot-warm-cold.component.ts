import { Component, OnInit } from '@angular/core';
import { range, interval,
  ConnectableObservable } from 'rxjs';
import { map, take, publishBehavior,
  refCount, publish,
  share, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-hot-warm-cold',
  templateUrl: './hot-warm-cold.component.html',
  styleUrls: ['./hot-warm-cold.component.scss']
})
export class HotWarmColdComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //? cold
    /*const source$ = range(1, 1)
    .pipe(map(value => Date.now()))
    source$.subscribe((value) => console.log('in obs 1 ', value));
    source$.subscribe((value) => console.log('in obs 2 ', value)); */
    //* warm
    /* const source$ = range(1, 1)
    .pipe(
      map(value => Date.now()),
      publish())  as ConnectableObservable<any>;
    source$.subscribe((value) => console.log('in obs 1 ', value));
    source$.subscribe((value) => console.log('in obs 2 ', value));
    source$.connect() */
    //! Hot
    /* const source$ = interval(1000)
    .pipe(
      take(3),
      publish(),
      refCount()
      )  as ConnectableObservable<any>;
    source$.subscribe((value) => console.log('in obs 1 ', value));
    setTimeout(() => {
      source$.subscribe((value) => console.log('in obs 2 ', value));
    }, 1000); */
    /* const source$ = interval(1000)
    .pipe(
      take(3),
      share()
      )  as ConnectableObservable<any>;
    source$.subscribe((value) => console.log('in obs 1 ', value));
    setTimeout(() => {
      source$.subscribe((value) => console.log('in obs 2 ', value));
    }, 1000);*/
    /* const source$ = interval(1000)
    .pipe(
      take(3),
      // publishReplay(1),
      // refCount()
      shareReplay(1)
      )  as ConnectableObservable<any>;
    source$.subscribe((value) => console.log('in obs 1 ', value));
    setTimeout(() => {
      source$.subscribe((value) => console.log('in obs 2 ', value));
    }, 5000);*/
    const source$ = interval(1000)
    .pipe(
      take(3),
      publishBehavior(8),
      refCount()
      // shareReplay(1)
      )  as ConnectableObservable<any>;
    source$.subscribe((value) => console.log('in obs 1 ', value));
    setTimeout(() => {
      source$.subscribe((value) => console.log('in obs 2 ', value));
    }, 5000);
  }

}
