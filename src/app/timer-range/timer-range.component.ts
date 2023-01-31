import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-range',
  templateUrl: './timer-range.component.html',
  styleUrls: ['./timer-range.component.scss']
})
export class TimerRangeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /* const timer$ = timer(3000, 1000).pipe(take(3));
    timer$.subscribe(console.log); */

    /* const range$ = range(0, 10);
    range$.subscribe(console.log); */

    /* const generate$ = generate(
      0,
      x => x < 3,
      x => x + 1,
      x => 'page no ' + x
    );
    generate$.subscribe(console.log); */

    /*const guestUser = false;

    const isGuestUser$ = iif(
      () => guestUser,
      of('guest user'),
      of('logged in user'),
    )

    isGuestUser$.subscribe(console.log);*/
  }

}
