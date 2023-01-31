import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-map-tap',
  templateUrl: './map-tap.component.html',
  styleUrls: ['./map-tap.component.scss']
})
export class MapTapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    interval(1000)
    .pipe(
      map((value: number) => {
        if(value > 2) throw Error('over ');
        return value;
      }),
      tap((value: number) => console.log('in tap', value)),
    ).subscribe(console.log)
  }

}
