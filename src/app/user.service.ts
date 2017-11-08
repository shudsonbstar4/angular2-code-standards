import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  baseUrl: any = 'https://api.github.com/users';

  constructor(
    private http: Http,
  ) { }

  getUser(user) {
    return this.http.get(`${this.baseUrl}/${user}`).map(response => response.json());
  }

  getRepos(user) {
    return this.http.get(`${this.baseUrl}/${user}/repos`).map(response => response.json());
  }
}
