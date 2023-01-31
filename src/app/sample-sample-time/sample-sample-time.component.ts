import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { sampleTime, take, sample } from 'rxjs/operators';

@Component({
  selector: 'app-sample-sample-time',
  templateUrl: './sample-sample-time.component.html',
  styleUrls: ['./sample-sample-time.component.scss']
})
export class SampleSampleTimeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const click$ = fromEvent(document, 'click');
    // const seconds$ = interval(1000);
    // seconds$.pipe(sample(click$))
    // .subscribe(console.log);
    const click$ = fromEvent(document, 'click');
    const seconds$ = interval(1000);
    seconds$.pipe(sampleTime(2000), take(3))
    .subscribe(console.log);
  }

}
