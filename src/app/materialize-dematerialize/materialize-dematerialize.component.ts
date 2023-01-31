import { Component, OnInit } from '@angular/core';
import { of, Notification } from 'rxjs';
import { map, materialize, dematerialize } from 'rxjs/operators';

@Component({
  selector: 'app-materialize-dematerialize',
  templateUrl: './materialize-dematerialize.component.html',
  styleUrls: ['./materialize-dematerialize.component.scss']
})
export class MaterializeDematerializeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const letters = of('a', 'b', 12, 'd');
    const upperCase = letters.pipe(map((x: any) => x.toUpperCase()));
    const materialized = upperCase.pipe(
      materialize(),
      map((noti: Notification<any>) =>
      noti.hasValue? noti : new Notification(
        'N', 'error',
        new TypeError(noti.error.message))),
        dematerialize(),
      )
    materialized.subscribe(x => console.log(x));
  }

}
