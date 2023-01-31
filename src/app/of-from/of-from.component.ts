import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //! of is not flating (more than 1 arg)
    of(Promise.resolve('some data')).subscribe(console.log);

    //! from is flating (1 arg)
    from(Promise.resolve('some data')).subscribe(console.log);
  }

}
