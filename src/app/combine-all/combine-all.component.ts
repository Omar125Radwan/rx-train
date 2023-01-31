import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { combineAll, concatAll, map, mergeAll, take } from 'rxjs/operators'
@Component({
  selector: 'app-combine-all',
  templateUrl: './combine-all.component.html',
  styleUrls: ['./combine-all.component.scss']
})
export class CombineAllComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    interval(1000).pipe(take(15)).subscribe((seconds) => {
      console.log('seconds ', seconds + 1);
    });
    //! combineAll
    /*const outer$ = of(1000, 5000); //? must compelete
    const combined$ = outer$.pipe(
      map(val => interval(val).pipe(take(2))),
      combineAll()
    );
    combined$.subscribe(console.log);*/
    //! concatAll
    /* const outer$ = of(1000, 5000); //? not must compelete
    const combined$ = outer$.pipe(
      map(val => interval(val).pipe(take(2))),
      concatAll()
    );
    combined$.subscribe(console.log); */
    //! mergeAll
    const outer$ = of(1000, 5000); //? not must compelete
    const combined$ = outer$.pipe(
      map(val => interval(val).pipe(take(2))),
      mergeAll(3)
    );
    combined$.subscribe(console.log);
  }

}
