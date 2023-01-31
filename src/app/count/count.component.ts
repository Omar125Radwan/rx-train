import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { takeUntil, count } from 'rxjs/operators';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    fromEvent(document, 'click')
    .pipe(
      takeUntil(interval(3000)),
      count((ev: any) => (ev.target as HTMLElement)
      .innerText === 'click me')
    )
    .subscribe(console.log)
  }

}
