import { Component, OnInit } from '@angular/core';
import { fromEvent, EMPTY } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-form-event-pluck-empty',
  templateUrl: './form-event-pluck-empty.component.html',
  styleUrls: ['./form-event-pluck-empty.component.scss']
})
export class FormEventPluckEmptyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const buttons = document.querySelectorAll('button');
    //!---1---
    /*console.log('buttons ', buttons);
    const buttonArray = Array.from(buttons);
    const buttonObservables = buttonArray.map(
      button =>
      new Observable(observer => {
        button.addEventListener('click', () => {
          observer.next(button.innerText);
        });
      })
    );
    console.log('buttonObservables ', buttonObservables);
    const buttonsObs$ = of(...buttonObservables).pipe(mergeAll());
    buttonsObs$.subscribe(console.log);*/
    //!---2---
    /*const buttons$ = fromEvent(buttons, 'click')
    .pipe(
      pluck('target', 'innerText')
    )
    .subscribe(console.log);*/
    //!---3---
    const clickObs$ = fromEvent(document, 'click')
    .pipe(
      tap((eve: any) => {
        if(eve.clientX > 150) {
          return EMPTY;
        }
        return console.log(eve.clientX)
      })
    )
    clickObs$.subscribe();
  }

}
