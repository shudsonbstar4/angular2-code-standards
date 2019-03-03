import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: any = 'https://api.github.com/users';

  constructor(
    private http: HttpClient,
  ) { }

  getUser(user) {
    return this.http.get(`${this.baseUrl}/${user}`)
      .pipe(
        map(response => response)
      );
  }

  getRepos(user) {
    return this.http.get(`${this.baseUrl}/${user}/repos`)
      .pipe(
        map(response => response)
      );
  }
}