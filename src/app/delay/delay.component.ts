import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { take, delayWhen, delay } from 'rxjs/operators';

@Component({
  selector: 'app-delay',
  templateUrl: './delay.component.html',
  styleUrls: ['./delay.component.scss']
})
export class DelayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    interval(1000)
    .pipe(take(5))
    .subscribe(console.log);
    //delay
    /*const myDate = new Date(2022, 10, 23, 17, 26, 15);
    of('some date').pipe(delay(myDate))
    .subscribe(console.log);*/
    //delayWhen
    of('some date')
    .pipe(delayWhen(() => interval(2000), interval(1000)))
    .subscribe(console.log);
  }

}
