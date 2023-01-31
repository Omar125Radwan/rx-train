import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { exhaustMap, exhaust, take } from 'rxjs/operators';

@Component({
  selector: 'app-exhaust-exhaust-map',
  templateUrl: './exhaust-exhaust-map.component.html',
  styleUrls: ['./exhaust-exhaust-map.component.scss']
})
export class ExhaustExhaustMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /*const click$ = fromEvent(document, 'click');
    const higherOrder$ = click$
    .pipe(
      map(event => interval(1000).pipe(take(4))),
      exhaust()
    )
    higherOrder$.subscribe(console.log)*/
    const click$ = fromEvent(document, 'click');
    const higherOrder$ = click$
    .pipe(
      exhaustMap(event => interval(1000).pipe(take(4)))
    )
    higherOrder$.subscribe(console.log)
  }

}
