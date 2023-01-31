import { Component, OnInit } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { bufferToggle } from 'rxjs/operators';

@Component({
  selector: 'app-buffer',
  templateUrl: './buffer.component.html',
  styleUrls: ['./buffer.component.scss']
})
export class BufferComponent implements OnInit {
  start$ = new Subject();
  stop$ = new Subject();

  constructor() { }

  ngOnInit(): void {
  // interval(1000).subscribe(console.log);
    //
    setTimeout(() => {
      this.start$.next();
    }, 3000);
    setTimeout(() => {
      this.stop$.next();
    }, 6000);
    fromEvent(document, 'click')
    .pipe(
      bufferToggle(this.start$, () => (this.stop$)),
    )
    .subscribe(console.log);
    // const clicks = fromEvent(document, 'click');
    // const intervalEvents = interval(1000);
    // const buffered = intervalEvents.pipe(buffer(clicks));
    // buffered.subscribe(x => console.log(x));
  }

}
