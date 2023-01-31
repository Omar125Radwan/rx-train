import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.scss']
})
export class AjaxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const obs$ = ajax
    ({
      url: 'https://httpbin.org/delay/2',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'rxjs-custom-header': 'Angular Omar'
      },
      body: {
        rxjs: "Hello World!"
      }
    })
    .pipe(
      tap((userResponse) => console.log('response is ',
      userResponse))
    )
    obs$.subscribe();
  }

}
