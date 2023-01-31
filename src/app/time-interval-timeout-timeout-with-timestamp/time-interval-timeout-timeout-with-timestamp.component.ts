import { Component, OnInit } from '@angular/core';
import { fromEvent, Timestamp } from 'rxjs';
import { timestamp, map, timeoutWith, timeout, timeInterval} from 'rxjs/operators';

@Component({
  selector: 'app-time-interval-timeout-timeout-with-timestamp',
  templateUrl: './time-interval-timeout-timeout-with-timestamp.component.html',
  styleUrls: ['./time-interval-timeout-timeout-with-timestamp.component.scss']
})
export class TimeIntervalTimeoutTimeoutWithTimestampComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const clicks$ = fromEvent(document, 'click');
    //! timeInterval
    // clicks$.pipe(timeInterval()).subscribe(console.log);
    //! timeout
    // clicks$.pipe(timeout(1000)).subscribe(console.log);
    // clicks$.pipe(timeout(new Date(2022, 10, 25, 12, 0, 0))).subscribe(console.log);
    //! timeoutWith
    // clicks$.pipe(timeoutWith(1000, interval(1000))).subscribe(console.log);
    //! timestamp
    clicks$.pipe(
      timestamp(),
      map((timeValue: Timestamp<any>) =>
        new Date(timeValue.timestamp))
      )
      .subscribe(console.log);
  }

}
