import { Component, OnInit } from '@angular/core';
import { of, forkJoin } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.scss']
})
export class ForkJoinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const obs1$ = of(['a', 'b', 'c'])
    .pipe(
      delay(3000)
    );
    const obs2$ = of([1, 2, 3]).pipe(
      tap(() => {
        throw new Error('Somthing wrong');
      })
    )
    const concatData = forkJoin(obs1$, obs2$, obs1$);
    concatData.subscribe(
      value => console.log('value is ', value),
      err => console.log('err is ', err),
      () => {console.log('compeleted')}
    )
  }

}
