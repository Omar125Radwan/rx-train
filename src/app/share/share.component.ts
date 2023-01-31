import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {

  constructor (private http: HttpClient){}
  ngOnInit(): void {
    const request = this.getPosts();
    this.doSomthing(request);
    request.subscribe();
  }
  doSomthing(obs: Observable<any>) {
    obs.subscribe();
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
    .pipe(share())
  }

}
