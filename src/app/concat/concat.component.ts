import { Component, OnInit } from '@angular/core';
import { of, concat } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const obs1$ = of('a', 'b', 'c')
    .pipe(
      delay(3000)
    );
    const obs2$ = of(1, 2, 3).pipe(
      tap(() => {
        throw new Error('Somthing wrong');
      })
    )
    const concatData = concat(obs1$, obs2$, obs1$);
    concatData.subscribe(
      value => console.log('value is ', value),
      err => console.log('err is ', err),
      () => {console.log('compeleted')}
    )
  }

}
