import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const letters$ = of('a', 'b', 'c'); // Observable
    const numbers$ = of(1, 2, 3); // Observable
    const combined = letters$.pipe(
      mergeMap(letter => {
        return numbers$.pipe(
          map(numberEl => letter + numberEl)
        );
      })
    )
    combined.subscribe(console.log);
  }

}
