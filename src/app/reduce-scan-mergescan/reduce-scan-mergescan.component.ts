import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { take, mergeScan } from 'rxjs/operators';

@Component({
  selector: 'app-reduce-scan-mergescan',
  templateUrl: './reduce-scan-mergescan.component.html',
  styleUrls: ['./reduce-scan-mergescan.component.scss']
})
export class ReduceScanMergescanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const interval$ = interval(1000).pipe(take(4));
    const count = interval$.pipe(
      mergeScan((acc: number, value: number) => {
        return of(acc + value);
      }, 5),
    )
    count.subscribe(console.log)
  }

}
